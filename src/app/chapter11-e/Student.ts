import { Subject } from 'rxjs';
export class Student {

  private _score$ = new Subject();

  get score$() {
    return this._score$.asObservable();
  }

  updateScore(score: number) {
    //大於 60分才允許推送成績事件
    if (score > 60) {
      this._score$.next(score);
    }
  }
}
