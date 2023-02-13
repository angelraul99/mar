import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from '../models/Usuario.model';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUsuarios(): import("../models/Usuario.model").UsuarioModel[] | PromiseLike<import("../models/Usuario.model").UsuarioModel[]> {
    throw new Error('Method not implemented.');
  }

  pruebasUrl: string = `${environment.baseUrl}/Usuario/Login`;
  usuarios: string = '';

  constructor(private http: HttpClient) { }

  public get(body:any){
    return this.http.get(this. pruebasUrl,body);

  }

  public post(body: any){
    return this.http.post(this. pruebasUrl,body);

  }

}
