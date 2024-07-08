import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder ,FormControlName  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

registerForm;

constructor(private formBuilder: FormBuilder ,private _Auth:LoginServiceService) {

      this.registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['',[ Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
        mobile: [''],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],

      });

  }

  async onSubmit() {

    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const confirmPassword = this.registerForm.value.confirmPassword;
     const constaditionalData ={
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      mobile: this.registerForm.value.mobile
     }
    try {
      if (password === confirmPassword && email&& password&& this.registerForm.valid) {
        await this._Auth.registerConFirebase(email, password,constaditionalData);
       
      }else{
        console.log('Las contraseñas no coinciden');
      }

    } catch (error) {
      
    }
  }

 async guardasDatosAdicionales() {
  
  try{
    const data = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      mobile: this.registerForm.value.mobile,
      photoURL: ""
      
    };
    

  }catch(error){
    console.log(error);
  }
}

}
// funcion(n: number): number {


 