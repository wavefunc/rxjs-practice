import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';


@Component({
  selector: 'app-chapter11-d',
  templateUrl: './chapter11-d.component.html',
  styleUrls: ['./chapter11-d.component.css']
})
export class Chapter11DComponent implements OnInit {

  public source$ = new AsyncSubject();

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(data => console.log(`AsyncSubject 第一次訂閱: ${data}`));

    this.source$.next(1);
    this.source$.next(2);

    this.source$.subscribe(data => console.log(`AsyncSubject 第二次訂閱: ${data}`));

    this.source$.next(3);
    this.source$.next(4);

    this.source$.subscribe(data => console.log(`AsyncSubject 第三次訂閱: ${data}`));

    this.source$.complete();
  }

}
