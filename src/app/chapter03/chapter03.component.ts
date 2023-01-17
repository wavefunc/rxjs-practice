import { Component, OnInit } from '@angular/core';
import { filter, map, of, scan, Subject, Subscription, throttleTime, Observable, interval, pipe, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chapter03',
  templateUrl: './chapter03.component.html',
  styleUrls: ['./chapter03.component.css']
})
export class Chapter03Component implements OnInit {

  public subject = new BehaviorSubject(0); // 0 is the initial value
  //public subject = new Subject(); 

  constructor() { }

  ngOnInit(): void {

    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    this.subject.next(1);
    this.subject.next(2);

    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.subject.next(3);

  }


}
