import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosModel } from '../models/Productos.model';
import { ProductosService } from '../services/Productos.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Productos-detail',
  templateUrl: './Productos-detail.component.html',
  styleUrls: ['./Productos-detail.component.css']
})
export class ProductosDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        productos: ProductosModel = new ProductosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly ProductosService: ProductosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.ProductosService.getProductosById(this.id)
        .then((response: any) => {
          this.productos = response.cont.Productos;
        })
        .catch(() => {});
    }
  }

  submitProductos(forma: NgForm){
    if (this.isNew)
    {
        this.ProductosService.postProductos(this.productos)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Productos has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Productos"
            });
        });
        } else
        {

            this.ProductosService.putProductos(this.productos, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Productos has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Productos"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    