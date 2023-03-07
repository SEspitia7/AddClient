/* Importing the modules that are needed for the application. */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { FoundComponent } from './component/found/found.component';
import { ListclientComponent } from './component/listclient/listclient.component';

/* Defining the routes for the application. */
const routes: Routes = [{
    path:'addclient',
    component:AddComponent
  },
  {
    path:'foundclient',
    component:FoundComponent
  },
  {
    path:'listclient',
    component:ListclientComponent
  },
];

/* Importing the RouterModule and the routes. */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
