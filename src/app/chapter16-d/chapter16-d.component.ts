import { of, Observable, partition } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter16-d',
  templateUrl: './chapter16-d.component.html',
  styleUrls: ['./chapter16-d.component.css']
})
export class Chapter16DComponent implements OnInit {

  public source$ = of(1, 2, 3, 4, 5, 6);

  public sourceEven$ = {} as Observable<number>
  public sourceOdd$ = {} as Observable<number>;

  // public [sourceEven$, sourceOdd$] = partition(this.source$, data => data % 2 === 0)

  constructor() { }

  ngOnInit(): void {

    [this.sourceEven$, this.sourceOdd$] = partition(this.source$, data => data % 2 === 0);

    this.sourceEven$.subscribe(data => console.log(`partition 示範 (偶數): ${data}`));
    this.sourceOdd$.subscribe(data => console.log(`partition 示範 (奇數): ${data}`));
  }

}
