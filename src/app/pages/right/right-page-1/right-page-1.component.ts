import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right-page-1',
  templateUrl: './right-page-1.component.html'
})
export class RightPage1Component implements OnInit {

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
  }

  onRightClick() {
    // FIXME I want to navigate to right2
    this.router.navigate([{ outlets: { right: ['right2'] } }], { relativeTo: this.route.root });
  }

}
