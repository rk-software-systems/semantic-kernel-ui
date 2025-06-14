import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardModule } from './features/dashboard/dashboard.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    RouterModule.forRoot([]),
  ],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
