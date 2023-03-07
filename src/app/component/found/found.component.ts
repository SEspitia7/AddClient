import { Component,ViewChild,ElementRef } from '@angular/core';
import { Client } from 'src/app/interface/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { HttpClient } from '@angular/common/http';

/* A decorator that is used to define the metadata of the component. */
@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})

/* It has a list of clients, a list of document types, and a method to search for clients by document type and number, and a method to export the list of clients to a CSV file */
export class FoundComponent {
  clients: Client[] = [];
  types = ['CC', 'NIT', 'PASAPORTE'];

  /* A way to access the DOM elements in the template. */
  @ViewChild('docTypeSelect') docTypeSelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('docNumberInput') docNumberInput!: ElementRef<HTMLInputElement>;
  @ViewChild('table') table!: ElementRef<HTMLTableElement>;

  constructor(private clientService: ClientServiceService, private http: HttpClient) {}

  /* It gets the values of the two form elements, and then uses them to build a URL that it uses to make a GET request to the server */
  search() {
    const doc_type = this.docTypeSelect.nativeElement.value;
    const doc_number = this.docNumberInput.nativeElement.value;
    console.log('Busco %s %s', doc_type, doc_number);
    const url = 'http://127.0.0.1:5000/foundbydoc?doc_type=' + doc_type + '&doc_number=' + doc_number;
    this.http.get(url).subscribe(clients => {
      this.clients = clients as Client[];
    });
  }
  /* It takes the table element, grabs the headers and body rows, and then creates a CSV string that can be downloaded*/
  exportToCsv() {
    const filename = 'clientes.csv';
    const rows = [];
    const table = this.table.nativeElement;
    const headers = Array.from(table.querySelectorAll('th')).map(header => header.textContent);
    rows.push(headers);
    const bodyRows = Array.from(table.querySelectorAll('tbody tr')).map(row => {
      return Array.from(row.querySelectorAll('td')).map(cell => cell.textContent);
    });
    bodyRows.forEach(row => rows.push(row));
    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
