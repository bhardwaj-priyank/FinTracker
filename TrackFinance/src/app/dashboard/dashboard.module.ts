import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultModule } from "../default/default.module";
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DefaultModule
  ]
})
export class DashboardModule { }
