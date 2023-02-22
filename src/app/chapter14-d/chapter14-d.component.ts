import { Component, OnInit } from '@angular/core';
import { EMPTY, iif, of } from 'rxjs';

@Component({
  selector: 'app-chapter14-d',
  templateUrl: './chapter14-d.component.html',
  styleUrls: ['./chapter14-d.component.css']
})
export class Chapter14DComponent implements OnInit {

  public emitOneIfEven = (data: number) => {

    return iif(() => data % 2 === 0, of('Hello'), EMPTY);
  };

  constructor() { }

  ngOnInit(): void {

    this.emitOneIfEven(1).subscribe(data => console.log(`iif 範例 (1): ${data}`));
    this.emitOneIfEven(2).subscribe(data => console.log(`iif 範例 (2): ${data}`));
  }


}
