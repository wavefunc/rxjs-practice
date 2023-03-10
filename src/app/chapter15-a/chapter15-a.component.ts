import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-chapter15-a',
  templateUrl: './chapter15-a.component.html',
  styleUrls: ['./chapter15-a.component.css']
})
export class Chapter15AComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    // from([1, 2, 3, 4]).subscribe(data => {
    //   console.log(`from 示範 (1)：data: ${data}`);
    // });

    from(Promise.resolve(1)).subscribe(data => {
      console.log(`from 示範 (2)：data: ${data}`);
    });
  }

}
