import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-chapter14-b',
  templateUrl: './chapter14-b.component.html',
  styleUrls: ['./chapter14-b.component.css']
})
export class Chapter14BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1, 2, 3, 4).subscribe(data => console.log(`of 範例: ${data}`));
  }

}
