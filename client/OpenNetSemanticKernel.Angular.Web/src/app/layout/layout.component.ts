import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `<header></header><main><ng-content></ng-content></main><footer></footer>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}
