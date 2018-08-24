import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsTableComponent } from './forms-table/forms-table.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsTableComponent,
    FormSubmitComponent,
    FormSubmissionsComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }