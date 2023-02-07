import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VentaModel } from '../models/Venta.model';
import { VentaService } from '../services/Venta.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Venta-detail',
  templateUrl: './Venta-detail.component.html',
  styleUrls: ['./Venta-detail.component.css']
})
export class VentaDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        venta: VentaModel = new VentaModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly VentaService: VentaService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.VentaService.getVentaById(this.id)
        .then((response: any) => {
          this.venta = response.cont.Venta;
        })
        .catch(() => {});
    }
  }

  submitVenta(forma: NgForm){
    if (this.isNew)
    {
        this.VentaService.postVenta(this.venta)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Venta has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Venta"
            });
        });
        } else
        {

            this.VentaService.putVenta(this.venta, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Venta has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Venta"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    