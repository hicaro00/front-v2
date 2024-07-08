import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder,FormControlName,Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm;;

  constructor(private formBuilder: FormBuilder ,private _Auth:LoginServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

 async onSubmit() {
    try{
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      if(email && password && this.loginForm.valid){
        const userCredential= await this._Auth.login(email, password);
        console.log(userCredential);
        //obtener uuid de usercredential
        

      }else{
        console.log('Datos incorrectos');
      }
    }catch(error){}
  }


  loginGoogle(){
    this._Auth.registerConGoogle();
  }
  

}
