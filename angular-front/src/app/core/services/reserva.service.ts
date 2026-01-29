// src\app\core\services\reserva.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaDto, SalonDto } from '../models/reserva.model';

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private apiUrl = 'http://localhost:5000/api/Reserva';
  
  private salones: SalonDto[] = [
    { id: 1, nombre: 'Salón A' },
    { id: 2, nombre: 'Salón B' },
    { id: 3, nombre: 'Salón C' }
  ];

  constructor(private http: HttpClient) {}

  obtenerReservas(): Observable<ReservaDto[]> {
    return this.http.get<ReservaDto[]>(this.apiUrl);
  }

  crearReserva(reserva: Partial<ReservaDto>): Observable<ReservaDto> {
    return this.http.post<ReservaDto>(this.apiUrl, reserva);
  }

  obtenerSalones(): Observable<SalonDto[]> {
    return new Observable<SalonDto[]>(observer => {
      observer.next(this.salones);
      observer.complete();
    });
  }
}