import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { HeaderComponent } from './header/header.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [HeaderComponent, UiComponent],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
