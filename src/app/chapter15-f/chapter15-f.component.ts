import { Component, OnInit } from '@angular/core';
import { defer } from 'rxjs';

@Component({
  selector: 'app-chapter15-f',
  templateUrl: './chapter15-f.component.html',
  styleUrls: ['./chapter15-f.component.css']
})
export class Chapter15FComponent implements OnInit {

  // 將 Promise 包起來
  // 因此在此 function 被呼叫前，都不會執行 Promise 內的程式
  public promiseFactory = () => new Promise((resolve) => {
    console.log('Promise 內被執行了');
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });

  public deferSource$ = defer(this.promiseFactory);

  constructor() { }

  ngOnInit(): void {

    // 此時 Promise 內程式依然不會被呼叫
    console.log('示範用 defer 解決 Promise 的問題:')
    // 直到被訂閱了，才會呼叫裡面的 Promise 內的程式
    this.deferSource$.subscribe(result => {
      console.log(`Promise 結果: ${result}`);
    });
  }

}
