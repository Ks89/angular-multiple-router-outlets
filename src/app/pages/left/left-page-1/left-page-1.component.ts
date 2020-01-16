import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-page-1',
  templateUrl: './left-page-1.component.html'
})
export class LeftPage1Component implements OnInit {

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLeftClick() {
    this.router.navigate([{ outlets: { primary: ['left2', '123'] } }], { relativeTo: this.route.parent });
  }

}
