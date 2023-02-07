import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../models/Usuario.model';
import { UsuarioService } from '../services/Usuario.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Usuario-detail',
  templateUrl: './Usuario-detail.component.html',
  styleUrls: ['./Usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        usuario: UsuarioModel = new UsuarioModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly UsuarioService: UsuarioService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.UsuarioService.getUsuarioById(this.id)
        .then((response: any) => {
          this.usuario = response.cont.Usuario;
        })
        .catch(() => {});
    }
  }

  submitUsuario(forma: NgForm){
    if (this.isNew)
    {
        this.UsuarioService.postUsuario(this.usuario)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Usuario has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Usuario"
            });
        });
        } else
        {

            this.UsuarioService.putUsuario(this.usuario, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Usuario has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Usuario"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    