import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'OpenNetSemanticKernel.Angular.Web';
}

// The new modular structure is now in place. Remove legacy flat app files that are no longer needed.
