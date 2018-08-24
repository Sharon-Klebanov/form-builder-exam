import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsService } from '../forms.service'
import { Input } from '../input';


@Component({
  selector: 'app-form-submissions',
  templateUrl: './form-submissions.component.html',
  styleUrls: ['./form-submissions.component.css']
})
export class FormSubmissionsComponent implements OnInit {

  submissions: string[][];
  inputs: Input[];

  constructor(
    private route: ActivatedRoute,
    private formService: FormsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getForm();
  }


  /**
   * getForm
   * get specific form according to it's id from server
   */
  getForm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.formService.getForm(id)
      .subscribe(form => {
        this.inputs = form.inputs;
        this.submissions = form.submissions
      });
  }

  /**
   * goBack
   * go back in the browser window
   */
  goBack(): void {
    this.location.back();
  }

}