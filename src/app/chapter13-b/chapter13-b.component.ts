import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter13-b',
  templateUrl: './chapter13-b.component.html',
  styleUrls: ['./chapter13-b.component.css']
})
export class Chapter13BComponent implements OnInit {

  public source$ = new Subject();

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(data => console.log(`Subject 第一次訂閱: ${data}`))

    this.source$.next(1);
    this.source$.next(2);

    this.source$.subscribe(data => console.log(`Subject 第二次訂閱: ${data}`))

    this.source$.next(3);
    this.source$.next(4);

    this.source$.subscribe(data => console.log(`Subject 第三次訂閱: ${data}`))

    this.source$.complete();
  }

}
