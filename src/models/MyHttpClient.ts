import axios from 'axios';
// @ts-ignore
import Logger from 'cpclog';

const logger = Logger.createWrapper('MyHttpClient', Logger.LEVEL_DEBUG);

export default class ClassName {
  constructor() {
    // super();
  }

  static async post(url: string, data: Object) {
    try {
      const res = await axios.post(url, data, {
        headers: {}
        //timeout: 5000, // ms
        //responseType: 'json', //  'text', 'arraybuffer', 'blob', 'document', 'json'(默认), 'stream'
      });

      if (res.status == 200) {
        return res;
        //res.statusText: 'OK',
        //res.headers: {},
        //res.data: {},
        //res.request: {},
      } else {
        throw Error('HttpError');
      }
    } catch (error) {
      logger.error('post error:', error);
      throw error;
    }
  }
}
