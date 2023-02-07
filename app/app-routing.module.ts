import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDetailComponent } from 'src/crud/Productos-detail.component';
import { ProductosComponent } from 'src/crud/Productos.component';
import { UsuarioDetailComponent } from 'src/crud/Usuario-detail.component';
import { UsuarioComponent } from 'src/crud/Usuario.component';
import { VentaDetailComponent } from 'src/crud/Venta-detail.component';
import { VentaComponent } from 'src/crud/Venta.component';
const routes: Routes = [
{path: 'Productos', component:ProductosComponent}, 
{path: 'Usuario', component:UsuarioComponent}, 
{path: 'Venta', component:VentaComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }