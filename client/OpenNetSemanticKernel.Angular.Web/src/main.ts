import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LayoutComponent } from './app/layout/layout.component';
import { CoreModule } from './app/core/core.module';
import { SharedModule } from './app/shared/shared.module';
import { DashboardModule } from './app/features/dashboard/dashboard.module';

bootstrapApplication(LayoutComponent, {
  providers: [
    provideRouter([]),
    importProvidersFrom(CoreModule, SharedModule, DashboardModule)
  ]
}).catch((err) => console.error(err));
