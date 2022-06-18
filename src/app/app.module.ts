import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import localeEs from '@angular/common/locales/es-CO'
import localeBr from '@angular/common/locales/br'
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeBr);

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
    // ButtonModule,
    // CardModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
