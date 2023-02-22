import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-chapter11-e',
  templateUrl: './chapter11-e.component.html',
  styleUrls: ['./chapter11-e.component.css']
})
export class Chapter11EComponent implements OnInit {

  public mike = new Student();

  constructor() { }

  ngOnInit(): void {

    this.mike.score$.subscribe(score => {
      console.log(`目前成績: ${score}`);
    });

    this.mike.updateScore(59);
  }

}
