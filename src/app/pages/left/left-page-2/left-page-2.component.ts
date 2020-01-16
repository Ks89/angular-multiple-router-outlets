import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-page-2',
  templateUrl: './left-page-2.component.html'
})
export class LeftPage2Component implements OnInit {

  id: string;

  constructor(private router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res);
      this.id = res.id;
    });
  }

  onLeftClick() {

    // FIXME I want to navigate back to left1
    this.router.navigate([{ outlets: { primary: ['left1'] } }], { relativeTo: this.route.parent });
  }

}
