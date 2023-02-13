import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import jwtDecode from 'jwt-decode';
import { UsuarioModel } from '../../models/Usuario.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  login: UsuarioModel=new UsuarioModel();
  public form: FormGroup = new FormGroup({});
  @Output() emitirRegistro:EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private LoginService: LoginService , private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      user:['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required]],
    });
  }

  enviarDatos(forma: NgForm):any{
    this.LoginService.post(this.login)
    .subscribe((res: any) => {
      console.log(res);

      localStorage.setItem('token', res.token);
      this.cookieService.set('token_access', res.token);
      var decodedHeader = jwtDecode(res.token,{header: true});
      console.log(decodedHeader);
      this.router.navigateByUrl('/log');
      this.emitirRegistro.emit();

    })

  }


}
