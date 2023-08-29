import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';
import { AddEditContactComponent } from './contact/add-edit-contact/add-edit-contact.component';

const routes: Routes = [
  { path: 'contact', component: ViewContactComponent },
  { path: 'addeditcontact', component: AddEditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
