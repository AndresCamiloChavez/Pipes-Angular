import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    // ButtonModule,
    // CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
