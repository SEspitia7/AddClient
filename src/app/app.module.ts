import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FoundComponent } from './component/found/found.component';
import { AddComponent } from './component/add/add.component';
import { DeleteComponent } from './component/delete/delete.component';
import { ListclientComponent } from './component/listclient/listclient.component'
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete'
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

/* The above code is a TypeScript code. It is a decorator function that takes a single metadata object
whose properties describe the module. The most important properties are: */
@NgModule({
  /* Declaring the components that are used in the app. */
  declarations: [
    AppComponent,
    FoundComponent,
    AddComponent,
    DeleteComponent,
    ListclientComponent
    
  ],
  /* Importing the modules that are used in the app. */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
