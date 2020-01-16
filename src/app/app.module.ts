import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main.component';
import { OtherComponent } from './pages/other/other.component';
import { AppComponent } from './app.component';
import { LeftPage1Component } from './pages/left/left-page-1/left-page-1.component';
import { LeftPage2Component } from './pages/left/left-page-2/left-page-2.component';
import { RightPage1Component } from './pages/right/right-page-1/right-page-1.component';
import { RightPage2Component } from './pages/right/right-page-2/right-page-2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OtherComponent,
    LeftPage1Component,
    LeftPage2Component,
    RightPage1Component,
    RightPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
