import { of, concat, merge, interval, map, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter16-b',
  templateUrl: './chapter16-b.component.html',
  styleUrls: ['./chapter16-b.component.css']
})
export class Chapter16BComponent implements OnInit {

  public sourceA$ = interval(1000).pipe(
    map(data => `A${data}`)
  );
  public sourceB$ = interval(3000).pipe(
    map(data => `B${data}`)
  );
  public sourceC$ = interval(5000).pipe(
    map(data => `C${data}`)
  );

  public subscription = {} as Subscription;


  constructor() { }

  ngOnInit(): void {

    this.subscription = merge(this.sourceA$, this.sourceB$, this.sourceC$).subscribe(data => {
      console.log(`merge 示範: ${data}`);
    });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 10000)


  }

}
