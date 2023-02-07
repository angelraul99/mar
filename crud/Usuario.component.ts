import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/Usuario.model';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/Usuario.service';

@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

mostrarActualizar: boolean = false;
  usuarioAll: UsuarioModel[] = [];
  id: number= 0;

  constructor(private readonly UsuarioService: UsuarioService) { }

  async ngOnInit() {
    this.usuarioAll = await this.UsuarioService.getUsuario();
  }

  obtenerUsuario() {
    this.UsuarioService.getUsuario()
    .then((response: any) => {
      this.usuarioAll = response.cont.usuarioAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idUsuario: any) {
    this.id = idUsuario;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerUsuario();
        }

        eliminar(usuario: UsuarioModel)
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
                this.UsuarioService.deleteUsuario(usuario.id)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerUsuario();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Usuario."
          });
        })
      }
    })
  }


}