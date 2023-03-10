import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-chapter15-d',
  templateUrl: './chapter15-d.component.html',
  styleUrls: ['./chapter15-d.component.css']
})
export class Chapter15DComponent implements OnInit {

  public subscription: Subscription = {} as Subscription;

  constructor() { }

  ngOnInit(): void {

    this.subscription = interval(1000).subscribe(data => {
      console.log(`interval 示範: ${data}`);
    });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 5500);
  }

}
