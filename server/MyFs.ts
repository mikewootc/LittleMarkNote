import path from 'path';
import fse from 'fs-extra';
import { MyFileInfo } from '../common/MyFsTypes';
import Logger from 'cpclog';

const logger = Logger.createWrapper('MyFs', Logger.LEVEL_DEBUG);

export default class MyFs {
  constructor(parameters) {}

  static async browseDir(dirPath) {
    const files: MyFileInfo[] = [];
    try {
      if (dirPath == '/' && process.platform == 'win32') {
        return MyFs.getWinDrives();
      }

      const dir = await fse.readdir(dirPath);
      logger.debug('dir:', dir);
      for (const file of dir) {
        try {
          const pathToFile = path.join(dirPath, file);
          const stat = fse.statSync(pathToFile);

          const isDirectory = stat.isDirectory();
          const isSymbolicLink = stat.isSymbolicLink();

          const fileInfo: MyFileInfo = {
            path: pathToFile,
            name: file,
            isDir: isDirectory,
            isSymLink: isSymbolicLink,
            metadata: stat,
            lazy: isDirectory,
          };
          files.push(fileInfo);
          logger.debug('stat:', stat);
        } catch (err) {
          logger.debug('stat child error:', err);
          const fileInfo = {
            path: dirPath.join(dirPath, file),
            name: file,
            error: err,
          };
          files.push(fileInfo);
        }
      }
      return files;
    } catch (err) {
      logger.error('Error:', err);
    }
  }

  static async createDir(parentPath: string, dirName: string, options?: Object) {
    try {
      logger.debug('createDir_. enter.', parentPath, dirName);
      let thePath = path.join(parentPath, dirName);
      logger.debug('createDir_. thePath.', thePath);
      fse.mkdirSync(thePath, { recursive: false });
      logger.debug('createDir_. Folder created successfully!');
    } catch (err) {
      logger.error('createDir err:', err);
      // TODO: error handling
      throw err;
    }
  }

  static async homeDir(dirPath) {}

  static getWinDrives = () => {
    if (process.platform !== 'win32') {
      return [];
    }

    const drives: MyFileInfo[] = [];
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < letters.length; i++) {
      const drive = `${letters[i]}:\\`;

      try {
        const stat = fse.statSync(drive);
        if (stat && stat.isDirectory()) {
          drives.push({
            path: drive,
            name: drive,
            isDir: true,
            isSymLink: false,
            metadata: stat,
            lazy: true,
          });
        }
      } catch (e) {
        // do nothing, drive does not exist
      }
    }

    return drives;
  };
}
