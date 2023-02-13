import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductosComponent } from 'src/crud/Productos.component';
import { ProductosDetailComponent } from 'src/crud/Productos-detail.component';
 import { UsuarioComponent } from 'src/crud/Usuario.component';
import { UsuarioDetailComponent } from 'src/crud/Usuario-detail.component';
 import { VentaComponent } from 'src/crud/Venta.component';
import { VentaDetailComponent } from 'src/crud/Venta-detail.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
 @NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
ProductosComponent,
ProductosDetailComponent,
 UsuarioComponent,
UsuarioDetailComponent,
 VentaComponent,
VentaDetailComponent,
 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
