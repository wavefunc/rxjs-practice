import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-chapter17-a',
  templateUrl: './chapter17-a.component.html',
  styleUrls: ['./chapter17-a.component.css']
})
export class Chapter17AComponent implements OnInit {

  public sourceA$ = interval(1000).pipe(
    map(data => `A${data + 1}`)
  );

  public sourceB$ = interval(2000).pipe(
    map(data => `B${data + 1}`)
  );

  public sourceC$ = interval(3000).pipe(
    map(data => `C${data + 1}`)
  );

  constructor() { }

  ngOnInit(): void {

    combineLatest([this.sourceA$, this.sourceB$, this.sourceC$])
      .pipe(
        take(12)
      )
      .subscribe(data => console.log(`combineLatest 範例: ${data}`));
  }

}
