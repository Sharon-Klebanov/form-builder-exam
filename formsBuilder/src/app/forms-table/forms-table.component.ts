import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { FormsService } from '../forms.service'

@Component({
  selector: 'app-forms-table',
  templateUrl: './forms-table.component.html',
  styleUrls: ['./forms-table.component.css']
})
export class FormsTableComponent implements OnInit {

  forms: Form[];
  constructor(private formsService: FormsService) { }

  /**
   * getForms
   * get all forms from server
   */
  getForms(): void {
    this.formsService.getForms().subscribe(forms => this.forms = forms);
  }

  ngOnInit() {
    this.getForms();
  }

}
