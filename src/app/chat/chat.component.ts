import { Component, OnInit } from '@angular/core';
import { QAdata } from '../qadata';
import { Option } from '../option';
import { Answer } from '../answer';
import { ClientServiceService } from '../client-service.service';

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
  answers: Answer[];

  constructor(private clientService: ClientServiceService) { }

  getOptionValue(optionid) {
    this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
    if (this.selectedOption.id <= 3) {
      this.showCorrectAnswerInput = true;
    } else {
      this.showCorrectAnswerInput = false;
    }
    console.log(this.selectedOption)
  }

  onSearch(question: string) {
    console.log(question);
    this.isvisible = true;

    this.clientService.sendQuestion(question).subscribe(answer => {
      this.answers = answer as Answer[];
      for (let item of this.answers) {
        if (item.data.search('^http') != -1) {
               item.islink = true;
         }
     }
    });
  }

  onKey(event: any) {
    if (this.isvisible) {
      this.isvisible = false;
      // reset value
      this.selectedOption = new Option(5, '5');
    }

    if (this.showCorrectAnswerInput) {
      this.showCorrectAnswerInput = false;
    }
  }

  onSendStatistics(qadata) {
    qadata.raiting = this.selectedOption.id;
    this.clientService.sendStatistics(qadata).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.qadata = new QAdata();
    this.isvisible = false;
    this.showCorrectAnswerInput = false;
  }

}
