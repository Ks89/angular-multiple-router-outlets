import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  template: `
  <button (click)="onClickBtn()">Go to main component app</button>
  `
})
export class OtherComponent {

  constructor(private router: Router) { }

  onClickBtn() {
    console.log('Go to main component app');
    this.router.navigate(['app']);
  }
}
