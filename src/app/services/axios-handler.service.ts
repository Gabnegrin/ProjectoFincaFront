import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AxiosHandlerService {

  constructor(private http: HttpClient, private tokenService: TokenServiceService) { }

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
  async getDatat(url: string): Promise<any> {
    const token = this.tokenService.getToken();
    if (token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      return await this.http.get(url,{ headers }).toPromise();
    } else {
      console.error('No JWT token found');
      return Promise.reject('No JWT token');
    }
  }

  async postDatat(url: string, data: any): Promise<any> {
    const token = this.tokenService.getToken();
    if (token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      return await this.http.post(url, data, { headers }).toPromise();
    } else {
      console.error('No JWT token found');
      return Promise.reject('No JWT token');
    }
  }
  async putDatat(url: string, data: any): Promise<any> {
    const token = this.tokenService.getToken();
    if (token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      return await this.http.put(url, data, { headers }).toPromise();
    } else {
      console.error('No JWT token found');
      return Promise.reject('No JWT token');
    }
  }
  async deleteDatat(url: string): Promise<any> {
    const token = this.tokenService.getToken();
    if (token) {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      return await this.http.delete(url,{ headers }).toPromise();
    } else {
      console.error('No JWT token found');
      return Promise.reject('No JWT token');
    }
  }
}
