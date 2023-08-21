import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AddeditContactComponent } from './contact/addedit-contact/addedit-contact.component';

const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'addedit-contact', component:AddeditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
