import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-chapter14-c',
  templateUrl: './chapter14-c.component.html',
  styleUrls: ['./chapter14-c.component.css']
})
export class Chapter14CComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    range(3, 10).subscribe(data => console.log(`range 範例: ${data}`));
  }

}
