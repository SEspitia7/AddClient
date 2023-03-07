import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/interface/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

/* This is a decorator that is used to define the metadata of the component. */
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
/* This class is used to add a new client to the database */
export class AddComponent {
  /* This is the code that is used to create the form and the variables that will be used to store the data that the user will enter. */
  addForm: FormGroup;
  selectedDocType: string;
  client: Client = {
    id: 0, doc_type: '',
    doc_number: '', name: '', last_name: '', email: '', phone_number: 0,
  };
  formError: string = '';
  docTypeOptions: SelectItem[] = [
    { label: 'Cédula de ciudadanía', value: 'CC' },
    { label: 'Número de Identificación Tributaria', value: 'NIT' },
    { label: 'Pasaporte', value: 'PASAPORTE' },
  ];
  /*This function is used to create a form with the fields that the user will fill in order to create a new client 
    @param {ClientServiceService} clienteService - ClientServiceService: This is the service that will be used to make the request to the API.
    @param {FormBuilder} formbuilder - This is the FormBuilder object that will be used to create the form.
    @param {Router} router - Router: This is the Angular Router service.    */
  constructor(private clienteService: ClientServiceService,private formbuilder:FormBuilder, private router: Router) {
    this.selectedDocType="";
    this.addForm=this.formbuilder.group({
      doc_type:['', Validators.required],
      doc_number:['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      phone_number:['', Validators.compose([Validators.required, Validators.minLength(7), Validators.pattern('[0-9]*')])],
    })
   }
   /*If the form is valid, we add the client to the database and show a success message*/
   addClient() {
    if (this.addForm.invalid) {
      this.formError = 'Por favor complete todos los campos requeridos correctamente.';
      return;
    }
    /* Assigning the values of the form to the client object. */
    this.client.doc_type = this.selectedDocType;
    this.client.doc_number = this.addForm.value.doc_number;
    this.client.name = this.addForm.value.name;
    this.client.last_name = this.addForm.value.last_name;
    this.client.email = this.addForm.value.email;
    this.client.phone_number = this.addForm.value.phone_number;
    /* Subscribing to the observable returned by the addClient method of the clientService. */
    this.clienteService.addClient(this.client).subscribe(() => {
      console.log('Cliente agregado con éxito');
      Swal.fire({
        icon: 'success',
        title: 'Cliente agregado con éxito',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['/addclient']);
      });
  
     /* Resetting the form and the selectedDocType variable. */
      this.client = {
        id: 0,
        doc_type: '',
        doc_number: '',
        name: '',
        last_name: '',
        email: '',
        phone_number: 0
      };
      this.addForm.reset();
      this.selectedDocType = '';
    });
  }
  
}