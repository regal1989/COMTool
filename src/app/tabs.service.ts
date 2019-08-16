import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor(private http:HttpClient) {}
    endpoint = 'http://localhost:3000';
    // Uses http.get() to load data from a single API endpoint
    getTabs() {
        return this.http.get(this.endpoint+'/api/getTabs', httpOptions);
    }
}
