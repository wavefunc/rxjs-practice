import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-chapter15-b',
  templateUrl: './chapter15-b.component.html',
  styleUrls: ['./chapter15-b.component.css']
})
export class Chapter15BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    fromEvent(document, 'click').subscribe(data => {
      console.log('fromEvent 示範: 滑鼠事件觸發了');
    });
  }

}
