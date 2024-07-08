import path from "path";
import { LogoutResolver } from "./../helpers/logout-resolver";

export const rutas = [
    {path: '/moda' ,name: 'Moda'},
    {path: '/exterior',name: 'Outdoor'},
    {path: '/paginas',name: 'Tecnología'},
    {path: '/blogs',name: 'blogs'},
]


export const rutasProfile =[
    {path:'/profile/login' , name: 'Log In'},
    {path: '/profile/wishlist', name: 'Lista de Deseos'},
    {path: '/profile/register', name: 'Registro de Usuario'},
]

export const rutasProfileLogeado = [
    {path:'/profile/perfilUsuario' , name: 'Perfil de Usuario'},
    {path: '/profile/wishlist', name: 'Lista de Deseos'},
    
]

export const rutas2 = [
    {path: '/buscar' ,name: 'Buscar '},
    {path: '/buscar',name: 'My Perfil'},
    {path: '/buscar',name: 'carrito '},
]

