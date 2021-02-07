import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../modules/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [DefaultComponent, PostsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterModule, SharedModule, MatSidenavModule],
})
export class DefaultModule {}
