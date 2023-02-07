
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {UsuarioModel} from '../models/Usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  pruebasUrl: string = `${environment.baseUrl}/Usuario`;
  constructor(private readonly http: HttpClient) {}

  getUsuarioById(id: number) {
    return lastValueFrom(this.http.get<UsuarioModel>(`${this.pruebasUrl}/${id}`));
  }

  getUsuario(): Promise<UsuarioModel[]> {
    return lastValueFrom(this.http.get<UsuarioModel[]>(`${this.pruebasUrl}`));
  }

  postUsuario(usuario: UsuarioModel) {
    
    return lastValueFrom(this.http.post(`${this.pruebasUrl}`, usuario));
  }
  putUsuario(usuario: UsuarioModel, id: number) { 
    return lastValueFrom(this.http.put(`${this.pruebasUrl}`, usuario));
  }

  deleteUsuario(id: any) {
    return lastValueFrom(this.http.delete(`${this.pruebasUrl}/${id}`));
  }
}