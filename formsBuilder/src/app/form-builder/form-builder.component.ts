import { Component, OnInit } from '@angular/core';
import { Input } from '../input';
import { Form } from '../form';
import { FormsService } from '../forms.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent implements OnInit {
  TYPES: string[] = ["text", "number", "tel", "email", "url", "password", "time",
    "week", "month", "color", "date", "datetime-local"];
  inputs: Input[] = [];

  constructor(
    private formsService: FormsService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  /**
   * addInput
   * add input field for the new form
   * @param  {} inLabel
   * @param  {} inName
   * @param  {} inType
   */
  addInput(inLabel, inName, inType) {
    this.inputs.push({ label: inLabel, name: inName, type: inType });
  }

  /**
   * save
   * save the new form
   * @param  {} nameForm
   * @returns void
   */
  save(nameForm): void {
    let form: Form = { id: 0, name: nameForm, inputs: this.inputs, submissions: [] };
    this.formsService.addForm(form).subscribe(() => this.goBack());
  }

  /**
   * goBack
   * go back in the browser window
   */
  goBack(): void {
    this.location.back();
  }
}