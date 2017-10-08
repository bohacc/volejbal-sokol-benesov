import {Http, RequestOptions, Headers} from "@angular/http";
import {Inject, Injectable} from "@angular/core";
import {AppService} from "../services/app.service";

@Injectable()
export class ApiService {

  constructor(
    public http: Http,
    @Inject('isBrowser') private isBrowser: Boolean,
    private appService: AppService,
    @Inject('REQUEST') public request: any,
  ) {
  }

  prepareOptions(opt: any) {
    let options: any;
    if (!this.isBrowser) {
      let hostname = this.request.hostname;
      if (!opt) {
        let headers = new Headers({'hostname': hostname, 'X-Host-Override': hostname});
        options = new RequestOptions({headers: headers});
      } else {
        opt.headers.append('Hostname', hostname);
        opt.headers.append('X-Host-Override', hostname);
        options = opt;
      }
    } else {
      options = opt;
    }
    return options;
  }

  get(url: string, options?: any): any {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.get(urlAll, this.prepareOptions(options));
  }

  post(url: string, data: any, options?: any): any {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.post(urlAll, data, this.prepareOptions(options));
  }

  put(url: string, data: any, options?: any): any {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.put(urlAll, data, this.prepareOptions(options));
  }

  delete(url: string, options?: any): any {
    let urlAll = this.appService.getRootPath() + url;
    return this.http.delete(urlAll, this.prepareOptions(options));
  }
}
