import { Component,OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { Client } from 'src/app/interface/client';
/* It's a component that obtains the list of clients from the client service and assigns it to the
clients variable */
@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
/* It's a component that obtains the list of clients from the client service and assigns it to the
clients variable */
export class ListclientComponent implements OnInit{
  clients:Client[]=[];
  constructor(private clientservice:ClientServiceService){}
 /*The function is called when the component is initialized*/
  ngOnInit():void{
    this.obtainListClient();
  }
  /* The function obtains the list of clients from the client service and assigns it to the clients variable*/
  obtainListClient(){
    this.clientservice.getClientList().subscribe((clients:Client[]) => {this.clients=clients; });
    console.log(this.clients);
  }

}
