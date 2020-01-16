import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
  <router-outlet></router-outlet>
  <router-outlet name="right"></router-outlet>
  `,
  styleUrls: ['./main.scss']
})
export class MainComponent {

  constructor(private router: Router) { }

  // onClickBtn() {
  //   console.log('Go to app');
  //   this.router.navigate(['app']);
  // }
}
