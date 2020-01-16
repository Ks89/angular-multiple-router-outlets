import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main.component';
import { OtherComponent } from './pages/other/other.component';
import { LeftPage1Component } from './pages/left/left-page-1/left-page-1.component';
import { LeftPage2Component } from './pages/left/left-page-2/left-page-2.component';
import { RightPage1Component } from './pages/right/right-page-1/right-page-1.component';
import { RightPage2Component } from './pages/right/right-page-2/right-page-2.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
  {
    path: 'app',
    component: MainComponent,
    children: [

      {
        path: '',
        children: [
          { path: 'left2/:id', component: LeftPage2Component },
          { path: 'right2', component: RightPage2Component, outlet: 'right' },

          { path: 'left1', component: LeftPage1Component },
          { path: 'right1', component: RightPage1Component, outlet: 'right' },

          { path: '', component: LeftPage1Component },
          { path: '', component: RightPage1Component, outlet: 'right' }
        ]
      }
    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
