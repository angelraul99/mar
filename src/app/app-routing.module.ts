import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosDetailComponent } from 'src/crud/Productos-detail.component';
import { ProductosComponent } from 'src/crud/Productos.component';
import { UsuarioDetailComponent } from 'src/crud/Usuario-detail.component';
import { UsuarioComponent } from 'src/crud/Usuario.component';
import { VentaDetailComponent } from 'src/crud/Venta-detail.component';
import { VentaComponent } from 'src/crud/Venta.component';
import { LoginComponent } from './login/login.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'log',component:LoginComponent},
{path: 'Productos', component:ProductosComponent, canActivate: [VigilanteGuard]},
{path: 'Usuario', component:UsuarioComponent, canActivate: [VigilanteGuard]},
{path: 'Venta', component:VentaComponent, canActivate: [VigilanteGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
