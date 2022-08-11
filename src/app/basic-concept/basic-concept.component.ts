// https://ithelp.ithome.com.tw/articles/10239852

import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-concept',
  templateUrl: './basic-concept.component.html',
  styleUrls: ['./basic-concept.component.css']
})
export class BasicConceptComponent implements OnInit {

  public counter$: Subject<number> = new Subject();
  public currentStatus = '';
  public countText = '目前計數：';
  public count = 0;

  constructor() { }

  ngOnInit(): void {

    const observer = {
      next: (data: any) => console.log(data),
      error: (err: any) => console.log(err),
      complete: () => console.log('complete')
    }
  }

  public resetCounter() {

    this.counter$ = new Subject();
    this.count = 0;

    this.counter$.subscribe({
      next: data => this.countText = `目前計數：${data}`,

    })


    this.currentStatus = '開始計數';
  }

  public addCount() {

    this.counter$.next(this.count++);
  }

  public error() {

  }

  public complete() {

  }

}
