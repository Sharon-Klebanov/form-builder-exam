import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsTableComponent} from './forms-table/forms-table.component'
import {FormSubmitComponent} from './form-submit/form-submit.component'
import {FormSubmissionsComponent} from './form-submissions/form-submissions.component'
import {FormBuilderComponent} from './form-builder/form-builder.component'

const routes: Routes = [
  { path: '', redirectTo: '/formsTable', pathMatch: 'full' },
  { path: 'formsTable', component: FormsTableComponent },
  { path: 'formSubmit/:id', component: FormSubmitComponent },
  { path: 'formSubmissions/:id', component: FormSubmissionsComponent },
  { path: 'formBuilder', component:FormBuilderComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule]
})
export class AppRoutingModule {

 }
