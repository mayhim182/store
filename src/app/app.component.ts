import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header></app-header>
    <router-outlet></router-outlet>
     `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
