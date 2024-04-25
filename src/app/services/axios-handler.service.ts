import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosHandlerService {

  constructor() { }

  getData(url: string): Promise<any> {
    return axios.get(url);
  }

  postData(url: string, data: any): Promise<any> {
    return axios.post(url, data);
  }

  putData(url: string, data: any): Promise<any> {
    return axios.put(url, data);
  }

  deleteData(url: string): Promise<any> {
    return axios.delete(url);
  }
}
