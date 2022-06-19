import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule
    
  ]
})
export class PrimeNgModule { }
