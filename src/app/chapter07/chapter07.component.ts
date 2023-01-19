import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter07',
  templateUrl: './chapter07.component.html',
  styleUrls: ['./chapter07.component.css']
})
export class Chapter07Component implements OnInit {

  public youtuber$ = new Subject();

  public observerA = {
    next: (id: any) => {
      console.log(`我是觀察者 A，我收到影片 ${id} 上架通知了`);
    },
    error: () => { },
    complete: () => { }
  }

  public observerASubscription = this.youtuber$.subscribe(this.observerA);

  public observerBSubscription = this.youtuber$.subscribe((id) => {
    console.log(`我是觀察者 B，我收到影片 ${id} 上架通知了`);
  })

  constructor() { }

  ngOnInit(): void {

    this.youtuber$.next(3);
    this.observerBSubscription.unsubscribe();
    this.youtuber$.next(4);

  }

}
