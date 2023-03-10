import { concat, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter16-a',
  templateUrl: './chapter16-a.component.html',
  styleUrls: ['./chapter16-a.component.css']
})
export class Chapter16AComponent implements OnInit {

  public sourceA$ = of(1, 2);
  public sourceB$ = of(3, 4);
  public sourceC$ = of(5, 6);

  constructor() { }

  ngOnInit(): void {

    concat(this.sourceA$, this.sourceB$, this.sourceC$).subscribe(data => {
      console.log(`concat 示範: ${data}`);
    });
  }

}
