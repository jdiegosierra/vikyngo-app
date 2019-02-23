import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URLS } from '../api_urls';

@Injectable()
export class APIService {
    // Gestion de urls y errores

    constructor(protected http: HttpClient) { }

    public getApiUrl(path, params = null): string {
        let url = URLS[path];
        if (params) {
            url += this.toQueryParams(params);
        }
        return url;
    }

    protected toQueryParams(dict): string {
        let result = '';
        for (const key in dict) {
            if (true) {
                const value = dict[key];
                result += (result !== '') ? '&' : '?';
                result += key;
                result += '=';
                result += encodeURI(value);
            }
        }
        return result;
    }

    public errorToString(errors: any, separator: string = '') {
      if (errors) {
        let errorMessages = [];
        for (const key in errors) {
            if (true) {
                const item = errors[key];
                if (Array.isArray(item)) {
                    errorMessages = item.concat(errorMessages);
                } else if (typeof item ===  'object') {
                    errorMessages.push(this.errorToString(item));
                } else {
                    errorMessages.push(item);
                }
            }
        }
        return errorMessages.join(separator);
      } else {
        return 'Unknown error';
      }
    }
}
