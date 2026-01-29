import { Component } from '@angular/core';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NbLayoutModule, NbCardModule],
  template: `
    <nb-layout>
      <nb-layout-header fixed>Salón de Reservas</nb-layout-header>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>Bienvenido</nb-card-header>
          <nb-card-body>
            Selecciona "Reservas" en el menú para gestionar tus reservas.
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class HomeComponent {}
