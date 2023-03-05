import path from 'path';
import fse from 'fs-extra';
import { MyFileInfo } from '../common/MyFsTypes';

export default class MyFs {
  constructor(parameters) {}

  static async browseDir(dirPath) {
    const files: MyFileInfo[] = [];
    try {
      if (dirPath == '/' && process.platform == 'win32') {
        return MyFs.getWinDrives();
      }

      const dir = await fse.readdir(dirPath);
      console.log('dir:', dir);
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
            lazy: isDirectory
          };
          files.push(fileInfo);
          console.log('stat:', stat);
        } catch (err) {
          console.log('stat child error:', err);
          const fileInfo = {
            path: dirPath.join(dirPath, file),
            name: file,
            error: err
          };
          files.push(fileInfo);
        }
      }
      return files;
    } catch (err) {
      console.log('Error:', err);
    }
  }

  static async createDir(parentPath: string, dirName: string, options?: Object) {
    try {
      fse.mkdirSync(path.join(parentPath, dirName), { recursive: false });
      console.log('Folder created successfully!');
    } catch (err) {
      console.error(err);
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
            lazy: true
          });
        }
      } catch (e) {
        // do nothing, drive does not exist
      }
    }

    return drives;
  };
}
