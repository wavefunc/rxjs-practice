import { Component, OnInit } from '@angular/core';
import { interval, map, race, take } from 'rxjs';

@Component({
  selector: 'app-chapter17-c',
  templateUrl: './chapter17-c.component.html',
  styleUrls: ['./chapter17-c.component.css']
})
export class Chapter17CComponent implements OnInit {

  public sourceA$ = interval(1000).pipe(
    map(data => `A${data + 1}`),
    take(6)
  );

  public sourceB$ = interval(2000).pipe(
    map(data => `B${data + 1}`),
    take(6)
  );

  public sourceC$ = interval(3000).pipe(
    map(data => `C${data + 1}`),
    take(6)
  );


  constructor() { }

  ngOnInit(): void {

    race(this.sourceA$, this.sourceB$, this.sourceC$)
      .subscribe(data => console.log(`race 示範: ${data}`));
  }

}
