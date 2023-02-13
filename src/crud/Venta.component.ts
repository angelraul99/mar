import { Component, OnInit } from '@angular/core';
import { VentaModel } from '../models/Venta.model';
import Swal from 'sweetalert2';
import { VentaService } from '../services/Venta.service';

@Component({
  selector: 'app-Venta',
  templateUrl: './Venta.component.html',
  styleUrls: ['./Venta.component.css']
})
export class VentaComponent implements OnInit {

mostrarActualizar: boolean = false;
  ventaAll: VentaModel[] = [];
  id: number= 0;

  constructor(private readonly VentaService: VentaService) { }

  async ngOnInit() {
    this.ventaAll = await this.VentaService.getVenta();
  }

  obtenerVenta() {
    this.VentaService.getVenta()
    .then((response: any) => {
      this.ventaAll = response.cont.ventaAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idVenta: any) {
    this.id = idVenta;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerVenta();
        }

        eliminar(venta: VentaModel)
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
                this.VentaService.deleteVenta(venta.id_venta)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerVenta();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Venta."
          });
        })
      }
    })
  }


}