import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { RegistroComponent } from './body/registro/registro.component';
import { PerfilDeUsuarioComponent } from './body/perfil-de-usuario/perfil-de-usuario.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }

    },
    {
        path: 'profile',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'register',
                component: RegistroComponent,
                data: {
                    title: 'Registro'
                }

            },
            {
                path: 'perfilUsuario',
                component: PerfilDeUsuarioComponent,
                data: {
                    title: 'Perfil de Usuario'
                }
            }

        ]

    }
    
];
