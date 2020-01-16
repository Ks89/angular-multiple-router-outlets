import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right-page-2',
  templateUrl: './right-page-2.component.html'
})
export class RightPage2Component implements OnInit {

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
  }

  onRightClick() {
    // FIXME I want to navigate to right1
    this.router.navigate([{ outlets: { right: ['right1'] } }], { relativeTo: this.route.root });
  }

}
