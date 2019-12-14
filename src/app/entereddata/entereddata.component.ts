import { Component, OnInit, Input } from '@angular/core';

import { QAdata } from '../qadata';

@Component({
  selector: 'app-entereddata',
  templateUrl: './entereddata.component.html',
  styleUrls: ['./entereddata.component.css']
})
export class EntereddataComponent implements OnInit {
  @Input() qa: QAdata;

  constructor() { }

  ngOnInit() {

  }

}
