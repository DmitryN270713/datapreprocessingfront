import { Component, OnInit } from '@angular/core';

import { QAdata } from '../qadata';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-datatoenter',
  templateUrl: './datatoenter.component.html',
  styleUrls: ['./datatoenter.component.css']
})
export class DatatoenterComponent implements OnInit {
  qadata: QAdata;
  newQAdata: QAdata;

  constructor(private clientService: ClientServiceService) { }

  onAdd(updatedQAdata: QAdata): void {
    this.newQAdata = updatedQAdata
    console.log(this.newQAdata)

    this.clientService.addQAPair(this.newQAdata).subscribe(qapair => {
        console.log(qapair);
    });
  }

  ngOnInit() {
    this.qadata = new QAdata();
  }

}
