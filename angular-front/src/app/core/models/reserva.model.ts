export interface ReservaDto {
  id: number;
  fecha: string;       
  horaInicio: string;  
  horaFin: string;     
  salonId: number;
  salonNombre?: string;
}

export interface SalonDto {
  id: number;
  nombre: string;
}