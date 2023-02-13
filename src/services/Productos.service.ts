
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {ProductosModel} from '../models/Productos.model';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  pruebasUrl: string = `${environment.baseUrl}/Productos`;
  constructor(private readonly http: HttpClient) {}

  getProductosById(id: number) {
    return lastValueFrom(this.http.get<ProductosModel>(`${this.pruebasUrl}/${id}`));
  }

  getProductos(): Promise<ProductosModel[]> {
    return lastValueFrom(this.http.get<ProductosModel[]>(`${this.pruebasUrl}`));
  }

  postProductos(productos: ProductosModel) {
    
    return lastValueFrom(this.http.post(`${this.pruebasUrl}`, productos));
  }
  putProductos(productos: ProductosModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.pruebasUrl}`, productos));
  }

  deleteProductos(id: any) {
    return lastValueFrom(this.http.delete(`${this.pruebasUrl}/${id}`));
  }
}