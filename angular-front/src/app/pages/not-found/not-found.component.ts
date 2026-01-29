import { Component } from '@angular/core';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NbLayoutModule, NbCardModule],
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>Página no encontrada</nb-card-header>
          <nb-card-body>
            La ruta solicitada no existe. Regresa al <a routerLink="/">inicio</a>.
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class NotFoundComponent {}
