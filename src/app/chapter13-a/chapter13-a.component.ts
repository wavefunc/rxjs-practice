import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter13-a',
  templateUrl: './chapter13-a.component.html',
  styleUrls: ['./chapter13-a.component.css']
})
export class Chapter13AComponent implements OnInit {

  public source$ = new Observable(subscriber => {
    console.log('stream 開始');
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    console.log('stream 結束');
    subscriber.complete();
  })

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(data => console.log(`Observable 第一次訂閱: ${data}`));
    // 1, 2, 3, 4
    this.source$.subscribe(data => console.log(`Observable 第二次訂閱: ${data}`));
    // 1, 2, 3, 4
  }

}
