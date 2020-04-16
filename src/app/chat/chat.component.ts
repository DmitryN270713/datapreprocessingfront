import { Component, OnInit } from '@angular/core';
import { QAdata } from '../qadata';
import { Option } from '../option';
import { Answer } from '../answer';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  qadata: QAdata;
  isvisible: boolean;
  showCorrectAnswerInput: boolean;
  selectedOption: Option = new Option(5, '5');
  options = [
     new Option(1, '1'),
     new Option(2, '2'),
     new Option(3, '3'),
     new Option(4, '4'),
     new Option(5, '5')
  ];
  answers: Answer[] = [
    new Answer("1", '1'),
    new Answer("2", '2'),
    new Answer("3", '3'),
    new Answer("4", '4'),
    new Answer("5", '5')
 ];

  constructor() { }

  getOptionValue(optionid) {
    this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
    if (this.selectedOption.id <= 3) {
      this.showCorrectAnswerInput = true;
    }
    console.log(this.selectedOption)
  }

  onSearch(question: string) {
    console.log(question);
    this.isvisible = true;
  }

  onKey(event: any) {
    if (this.isvisible) {
      this.isvisible = false;
    }

    if (this.showCorrectAnswerInput) {
      this.showCorrectAnswerInput = false;
    }
  }

  onSendStatistics(qadata) {
    qadata.raiting = this.selectedOption;
    console.log(qadata);
  }

  ngOnInit() {
    this.qadata = new QAdata();
    this.isvisible = false;
    this.showCorrectAnswerInput = false;
  }

}
