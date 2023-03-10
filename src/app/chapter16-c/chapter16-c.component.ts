import { interval, map, zip } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter16-c',
  templateUrl: './chapter16-c.component.html',
  styleUrls: ['./chapter16-c.component.css']
})
export class Chapter16CComponent implements OnInit {

  public sourceA$ = interval(1000).pipe(
    map(data => `A${data + 1}`)
  );

  public sourceB$ = interval(3000).pipe(
    map(data => `B${data + 1}`)
  );

  public sourceC$ = interval(5000).pipe(
    map(data => `C${data + 1}`)
  );

  constructor() { }

  ngOnInit(): void {

    zip(this.sourceA$, this.sourceB$, this.sourceC$).subscribe(data => {
      console.log(`zip 示範: ${data}`);
    });
  }

}
