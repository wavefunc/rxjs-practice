import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-chapter15-c',
  templateUrl: './chapter15-c.component.html',
  styleUrls: ['./chapter15-c.component.css']
})
export class Chapter15CComponent implements OnInit {

  public addClickHandler = (handler: EventListener) => {
    console.log('fromEventPattern 示範: 自定義註冊滑鼠事件');
    document.addEventListener('click', event => handler(event));
  }

  public removeClickHandelr = (handler: EventListener) => {
    console.log('fromEventPattern 示範: 自定義取消滑鼠事件');
    document.removeEventListener('click', handler);
  }

  public source$ = fromEventPattern(
    this.addClickHandler,
    this.removeClickHandelr
  );

  public subscription = this.source$.subscribe(event => {
    console.log('fromEventPattern 示範: 滑鼠事件發生了', event);
  });

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 3000)
  }

}
