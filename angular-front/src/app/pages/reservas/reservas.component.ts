// src\app\pages\reservas\reservas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { 
  NbLayoutModule, 
  NbCardModule, 
  NbButtonModule, 
  NbInputModule, 
  NbDatepickerModule,
  NbToastrService,
  NbSelectModule
} from '@nebular/theme';
import { ReservaDto, SalonDto } from '../../core/models/reserva.model';
import { ReservaService } from '../../core/services/reserva.service';
import { finalize } from 'rxjs/operators';
import { NbIconModule, NbAlertModule } from '@nebular/theme';
import { CalendarEvent, CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule,
    NbIconModule,
    NbAlertModule,
    CalendarModule,
    NbSelectModule
  ],
  template: `
    <nb-layout>
      <nb-layout-header fixed>Reservas</nb-layout-header>
      <nb-layout-column>

        <!-- Lista de Reservas -->
        <nb-card>
          <nb-card-header>
            <nb-icon icon="calendar-outline"></nb-icon> Tus Reservas
          </nb-card-header>
          <nb-card-body>
            <div *ngIf="reservas.length > 0; else noReservas">
              <ul class="reserva-list-compact">
                <li *ngFor="let r of reservas" class="reserva-item-compact">
                  <span class="reserva-fecha-compact">{{ r.fecha | date:'dd/MM/yyyy' }}</span>
                  <span class="reserva-horario-compact">{{ r.horaInicio }} - {{ r.horaFin }}</span>
                  <span class="reserva-salon-compact">{{ r.salonNombre }}</span>
                </li>
              </ul>
            </div>
            <ng-template #noReservas>
              <nb-alert status="info">Aún no tenés reservas asignadas.</nb-alert>
            </ng-template>
          </nb-card-body>
        </nb-card>

        <nb-card class="mt-4">
          <nb-card-header>Calendario</nb-card-header>
          <nb-card-body>
            <mwl-calendar-month-view
              [viewDate]="viewDate"
              [events]="calendarEvents">
            </mwl-calendar-month-view>
          </nb-card-body>
        </nb-card>

        <!-- Formulario de nueva reserva -->
        <nb-card class="mt-4">
          <nb-card-header>Crear Nueva Reserva</nb-card-header>
          <nb-card-body>
            <form [formGroup]="reservaForm" (ngSubmit)="agregarReserva()">

              <input nbInput placeholder="Fecha" formControlName="fecha" [nbDatepicker]="picker" class="mb-2"/>
              <nb-datepicker #picker></nb-datepicker>

              <input nbInput type="time" placeholder="Hora Inicio" formControlName="horaInicio" class="mb-2"/>
              <input nbInput type="time" placeholder="Hora Fin" formControlName="horaFin" class="mb-2"/>

              <nb-select placeholder="Selecciona un salón" formControlName="salonId" class="mb-2">
                <nb-option *ngFor="let s of salones" [value]="s.id">{{ s.nombre }}</nb-option>
              </nb-select>

              <div class="mt-3">
                <button nbButton status="primary" type="submit" [disabled]="loading">
                  {{ loading ? 'Guardando...' : 'Agregar Reserva' }}
                </button>
              </div>
            </form>
          </nb-card-body>
        </nb-card>

        <div class="mt-3">
          <button nbButton status="success" type="button" (click)="abrirMPBrick()">
            Realizar Pre Reserva con MP
          </button>

          <!-- Contenedor del Brick -->
          <div id="paymentBrick_container" style="margin-top: 20px;"></div>
        </div>

      </nb-layout-column>
    </nb-layout>
  `,
  styles: [`
    input[nbInput], select[nbInput] {
      display: block;
      width: 100%;
    }
    .mb-2 {
      margin-bottom: 10px;
    }
    .mt-4 {
      margin-top: 20px;
    }
    .reserva-list-compact {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .reserva-item-compact {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      border-bottom: 1px solid #eee;
      font-size: 0.9rem;
    }
    .reserva-fecha-compact {
      width: 25%;
    }
    .reserva-horario-compact {
      width: 25%;
      text-align: center;
    }
    .reserva-salon-compact {
      width: 50%;
      text-align: right;
    }
  `]
})
export class ReservasComponent implements OnInit {
  salones: SalonDto[] = [];
  loading = false;

  reservas: ReservaDto[] = [];
  calendarEvents: CalendarEvent[] = [];
  viewDate: Date = new Date();

  reservaForm = new FormGroup({
    fecha: new FormControl<Date | null>(null),
    horaInicio: new FormControl<string | null>(null),
    horaFin: new FormControl<string | null>(null),
    salonId: new FormControl<number | null>(null)
  });

  constructor(private reservaService: ReservaService, private toastr: NbToastrService) {}

  ngOnInit() {
    this.cargarSalones();
    this.cargarReservas();
  }

  cargarSalones() {
    this.reservaService.obtenerSalones().subscribe({
      next: res => this.salones = res,
      error: () => this.toastr.danger('Error cargando salones')
    });
  }

  cargarReservas() {
    this.reservaService.obtenerReservas().subscribe({
      next: res => {
        this.reservas = res;
        this.calendarEvents = this.reservas.map(r => ({
          start: new Date(r.fecha + 'T' + r.horaInicio),
          end: new Date(r.fecha + 'T' + r.horaFin),
          title: `Salón ${r.salonNombre}`,
          color: { primary: '#1E90FF', secondary: '#D1E8FF' }
        }));
      },
      error: () => this.toastr.danger('Error cargando reservas')
    });
  }

  agregarReserva() {
    if (this.reservaForm.valid) {
      this.loading = true;

      // Obtenemos la fecha y la formateamos a YYYY-MM-DD
      const fecha: Date | null = this.reservaForm.value.fecha ?? null;
      const fechaFormateada = fecha
        ? fecha.toISOString().split('T')[0]
        : '';

      // Función para asegurar formato HH:mm:ss
      const formatTime = (time: string | null) => {
        if (!time) return '';
        return time.length === 5 ? time + ':00' : time; // "HH:mm" → "HH:mm:ss"
      };

      const horaInicio = formatTime(this.reservaForm.value.horaInicio ?? null);
      const horaFin = formatTime(this.reservaForm.value.horaFin ?? null);

      const formValue: Partial<ReservaDto> = {
        fecha: fechaFormateada,
        horaInicio,
        horaFin,
        salonId: Number(this.reservaForm.value.salonId ?? 0)
      };

      console.log('POST body:', formValue);

      this.reservaService.crearReserva(formValue)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: res => {
            this.reservas.push(res);
            this.toastr.success('Reserva creada correctamente');
            this.reservaForm.reset();
          },
          error: err => this.toastr.danger(err.error || 'Error creando la reserva')
        });
    }
  }

  abrirMPBrick() {
    // Token público de prueba (reemplazar con el real desde MercadoPago)
    const mp = new (window as any).MercadoPago('TU_PUBLIC_KEY', {
      locale: 'es-AR'
    });

    const bricksBuilder = mp.bricks();

    // Si querés que se regenere cada vez que abran el brick
    const container = document.getElementById('paymentBrick_container');
    if (container) container.innerHTML = '';

    bricksBuilder.create('payment', 'paymentBrick_container', {
      initialization: {
        amount: 1000, // Monto de la pre reserva
      },
      customization: {
        paymentMethods: {
          creditCard: 'all',
          debitCard: 'all',
          ticket: 'all',
        }
      },
      callbacks: {
        onReady: () => {
          console.log('Brick listo');
        },
        onSubmit: async (cardFormData: any) => {
          // Aquí deberías llamar a tu backend para generar el pago
          console.log('Datos de pago:', cardFormData);
          return new Promise<void>((resolve) => {
            this.toastr.success('Pago enviado a MercadoPago');
            resolve();
          });
        },
        onError: (error: any) => {
          console.error(error);
          this.toastr.danger('Error al procesar el pago');
        }
      }
    });
  }


}