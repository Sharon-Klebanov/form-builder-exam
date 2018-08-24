import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsService } from '../forms.service'
import { Input } from '../input';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})

export class FormSubmitComponent implements OnInit {

  id: number; //form's id
  inputs: Input[]; //form's input fields

  constructor(
    private route: ActivatedRoute,
    private formService: FormsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getForm();
  }

  /**
   * submit
   * add submit for specific form according to it's id from server
   */
  submit(): void {
    let submitForm: string[] = [];
    this.inputs.forEach(element => {
      submitForm.push((<HTMLInputElement>document.getElementById(element.name)).value);
    });
    this.formService.addSubmit(this.id, submitForm).subscribe(() => this.goBack());
  }

  /**
   * getForm
   * get specific form according to it's id from server
   */
  getForm(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.formService.getForm(this.id)
      .subscribe(form => this.inputs = form.inputs);
  }

  /**
   * goBack
   * go back in the browser window
   */
  goBack(): void {
    this.location.back();
  }
}