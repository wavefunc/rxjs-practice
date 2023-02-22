import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-chapter14-a',
  templateUrl: './chapter14-a.component.html',
  styleUrls: ['./chapter14-a.component.css']
})
export class Chapter14AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    EMPTY.subscribe({
      next: data => console.log(`empty 範例: ${data}`),
      complete: () => console.log('empty 結束')
    });
  }

}
