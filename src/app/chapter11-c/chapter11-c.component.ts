import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-chapter11-c',
  templateUrl: './chapter11-c.component.html',
  styleUrls: ['./chapter11-c.component.css']
})
export class Chapter11CComponent implements OnInit {

  // 設定「重播」最近3次資料給訂閱者
  public source$ = new ReplaySubject(3);

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(data => console.log(`ReplaySubject 第一次訂閱: ${data}`))

    this.source$.next(1);
    this.source$.next(2);

    this.source$.subscribe(data => console.log(`ReplaySubject 第二次訂閱: ${data}`))

    this.source$.next(3);
    this.source$.next(4);

    this.source$.subscribe(data => console.log(`ReplaySubject 第三次訂閱: ${data}`))
  }

}
