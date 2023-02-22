import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-chapter14-f',
  templateUrl: './chapter14-f.component.html',
  styleUrls: ['./chapter14-f.component.css']
})
export class Chapter14FComponent implements OnInit {

  public source$ = ajax('https://api.github.com/repos/reactivex/rxjs/issues');

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(result => console.log(result.response));
  }

}
