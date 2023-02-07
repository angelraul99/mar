import { Component, OnInit } from '@angular/core';
import { ProductosModel } from '../models/Productos.model';
import Swal from 'sweetalert2';
import { ProductosService } from '../services/Productos.service';

@Component({
  selector: 'app-Productos',
  templateUrl: './Productos.component.html',
  styleUrls: ['./Productos.component.css']
})
export class ProductosComponent implements OnInit {

mostrarActualizar: boolean = false;
  productosAll: ProductosModel[] = [];
  id: number= 0;

  constructor(private readonly ProductosService: ProductosService) { }

  async ngOnInit() {
    this.productosAll = await this.ProductosService.getProductos();
  }

  obtenerProductos() {
    this.ProductosService.getProductos()
    .then((response: any) => {
      this.productosAll = response.cont.productosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idProductos: any) {
    this.id = idProductos;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerProductos();
        }

        eliminar(productos: ProductosModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.ProductosService.deleteProductos(productos.id)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerProductos();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Productos."
          });
        })
      }
    })
  }


}