import axios from 'axios';
// @ts-ignore
import Logger from 'cpclog';
import MyHttpClient from './MyHttpClient';
import type { MyFileInfo } from '../../common/MyFsTypes';

const logger = Logger.createWrapper('MyFsClient', Logger.LEVEL_DEBUG);

const BASE_ADDR = '/';
const fsUrls = {
  browseDir: BASE_ADDR + 'fs/browse-dir'
};
const FS_DIR = 'fs/';

export default class MyFsClient {
  constructor() {
    //super();
  }

  static async browseDir(path: string): Promise<MyFileInfo[]> {
    try {
      logger.debug('browseDir_:', path);
      let res = await MyHttpClient.post(fsUrls.browseDir, { path });
      if (res.data && res.data instanceof Array) {
        return res.data;
      } else {
        throw Error('DirError');
      }
    } catch (error) {
      logger.error('browseDir_ error:', error);
      throw error;
    }
  }
}
