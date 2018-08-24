import { Injectable } from '@angular/core';
import { Form } from './form';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FormsService {

  // server url 
  private formsURL = 'http://localhost:3000/forms'
  
  /**
   * getForms
   * get all forms from server
   * @returns Observable
   */
  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.formsURL);
  }

  /**
   * getForm
   * get specific form according to it's id from server
   * @param  {} id
   * @returns Observable
   */
  getForm(id): Observable<Form> {
    const url = `${this.formsURL}/${id}`;
    return this.http.get<Form>(url);
  }

  /**
   * addSubmit
   * add submit for specific form according to it's id from server
   * @param  {} id
   * @param  {string[]} submit
   * @returns Observable
   */
  addSubmit(id, submit: string[]): Observable<any> {
    const url = `${this.formsURL}/submit/${id}`;
    return this.http.post(url, submit, httpOptions);
  }
  
  /**
   * addForm
   * add new form in server DB
   * @param  {Form} form
   * @returns Observable
   */
  addForm(form: Form): Observable<any> {
    const url = `${this.formsURL}/addForm`;
    return this.http.post(url, form, httpOptions);
  }

  constructor(private http: HttpClient) { }
}