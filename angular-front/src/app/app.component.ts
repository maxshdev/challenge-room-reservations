// src\app\app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule
  ],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <h1>Salon Reservas</h1>
      </nb-layout-header>

      <nb-sidebar>
        <nb-menu [items]="menuItems"></nb-menu>
      </nb-sidebar>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
        © 2025 Salon Reservas
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SalonReservasFront';

  menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Reservas', link: '/reservas' }
  ];
}
