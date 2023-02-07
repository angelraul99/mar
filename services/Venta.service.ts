
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {VentaModel} from '../models/Venta.model';
@Injectable({
  providedIn: 'root'
})
export class VentaService {

  pruebasUrl: string = `${environment.baseUrl}/Venta`;
  constructor(private readonly http: HttpClient) {}

  getVentaById(id_venta: number) {
    return lastValueFrom(this.http.get<VentaModel>(`${this.pruebasUrl}/${id_venta}`));
  }

  getVenta(): Promise<VentaModel[]> {
    return lastValueFrom(this.http.get<VentaModel[]>(`${this.pruebasUrl}`));
  }

  postVenta(venta: VentaModel) {
    
    return lastValueFrom(this.http.post(`${this.pruebasUrl}`, venta));
  }
  putVenta(venta: VentaModel, id_venta: number) { 
    return lastValueFrom(this.http.put(`${this.pruebasUrl}`, venta));
  }

  deleteVenta(id_venta: any) {
    return lastValueFrom(this.http.delete(`${this.pruebasUrl}/${id_venta}`));
  }
}