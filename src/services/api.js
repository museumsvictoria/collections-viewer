import fetch from 'isomorphic-fetch';
import parse from 'parse-link-header';
import { validateObject, transformObject } from './objectTools';

export default class Api {
  static getResponse(url) {
    return fetch(url).then(response => ({
      json: response.json(),
      link: parse(response.headers.get('link')),
    }));
  }

  static transformData(data) {
    return data.reduce((result, object) => {
      if (validateObject(object)) {
        return result.concat(transformObject(object));
      }

      return result;
    }, []);
  }
}
