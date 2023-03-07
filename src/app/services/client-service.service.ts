import { Injectable } from '@angular/core';
import { Client } from '../interface/client';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
/* It's a service that uses the HttpClient class to make HTTP requests to the backend */
export class ClientServiceService {
  private api="http://localhost:5000";
  constructor(private httpclient:HttpClient) { }
  /*The function returns an Observable of type Client[], which is an array of Client objects*/
  getClientList():Observable<Client[]>{
    const path=`${this.api}/get`;
    console.log(path);
    return this.httpclient.get<Client[]>(path);
  }
  /*It takes a number as a parameter, and returns an Observable of type Client | @param {number} id - The id of the client to be searched. */
  getClientID(id:number):Observable<Client>{
    const path=`${this.api}/searchid/${id}`;
    return this.httpclient.get<Client>(path);
  }
  /* @param {Client} client - The client object that we want to add to the database.*/
  addClient(client:Client):Observable<Object>{
    const path=`${this.api}/add`;
    return this.httpclient.post(path,client);
  }
  /*@param {String} doc_type - The type of document, for example, CC, NIT, etc. |   * @param {String} doc_number - The document number of the client.*/
  foundbydoc(doc_type:String,doc_number:String):Observable<Client>{
    const path=`${this.api}/foundbydoc?doc_type=${doc_type}&doc_number=${doc_number}`;
    return this.httpclient.get<Client>(path);
  }
}
