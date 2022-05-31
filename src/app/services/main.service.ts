import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfile } from '../interfaces/profile.interface';

@Injectable()

export class MainService {

  reqUrl: string = 'http://localhost:3001/api';

  constructor( private httpClient: HttpClient) {
  }

  getAllProfiles(): Observable<IProfile[]> {
    return this.httpClient
      .get<IProfile[]>(this.reqUrl + '/profiles', {
        headers: { "Accept": "application/json" }
      });
  }

}
