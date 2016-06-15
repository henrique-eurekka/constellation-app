import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class DesaceleraData {
  data: any;

  constructor(private http: Http) {}

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('data/desacelera.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    return data;
  }

  getData() {
    return this.load().then(data => {
      return data;
    });
  }

}