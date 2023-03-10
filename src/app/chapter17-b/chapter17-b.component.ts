import { map, interval, forkJoin, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter17-b',
  templateUrl: './chapter17-b.component.html',
  styleUrls: ['./chapter17-b.component.css']
})
export class Chapter17BComponent implements OnInit {

  public sourceA$ = interval(1000).pipe(
    map(data => `A${data + 1}`),
    take(5)
  );

  public sourceB$ = interval(2000).pipe(
    map(data => `B${data + 1}`),
    take(4)
  );

  public sourceC$ = interval(3000).pipe(
    map(data => `C${data + 1}`),
    take(3)
  );


  constructor() { }

  ngOnInit(): void {

    forkJoin([this.sourceA$, this.sourceB$, this.sourceC$])
      .subscribe({
        next: data => console.log(`forkJoin 範例: ${data}`),
        complete: () => console.log(`forkJoin 結束`)
      });
  }

}
