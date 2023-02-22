import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-chapter14-e',
  templateUrl: './chapter14-e.component.html',
  styleUrls: ['./chapter14-e.component.css']
})
export class Chapter14EComponent implements OnInit {

  public source$ = throwError(() => new Error('發生錯誤了'));

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe({
      next: data => console.log(`throwError 範例 (next): ${data}`),
      error: error => console.log(`throwError 範例 (error): ${error}`),
      complete: () => console.log(`throwError 範例 (complete)`)
    })
  }

}
