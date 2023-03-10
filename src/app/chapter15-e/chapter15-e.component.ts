import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-chapter15-e',
  templateUrl: './chapter15-e.component.html',
  styleUrls: ['./chapter15-e.component.css']
})
export class Chapter15EComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // timer(3000, 1000).subscribe(data => {
    //   console.log(`timer 示範 (1): ${data}`);
    // });

    timer(2000).subscribe(data => {
      console.log(`timer 示範 (2): ${data}`);
    });
  }

}
