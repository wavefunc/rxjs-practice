import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-chapter11',
  templateUrl: './chapter11.component.html',
  styleUrls: ['./chapter11.component.css']
})
export class Chapter11Component implements OnInit {

  public source$ = new BehaviorSubject(0);

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(data => console.log(`BehaviorSubject 第一次訂閱: ${data}`));
    // BehaviorSubject 第一次訂閱: 0

    this.source$.next(1);
    this.source$.next(2);

    this.source$.subscribe(data => console.log(`BehaviorSubject 第二次訂閱: ${data}`));

    this.source$.next(3);
    this.source$.next(4);

    console.log(`目前 BehaviorSubject 的內容為: ${this.source$.value}`);
  }

}
