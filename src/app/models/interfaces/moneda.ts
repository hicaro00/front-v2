export interface Moneda {
    abreviado: string;
    nombre: string;
    pais: string;
    valor: number;
}

export interface idioma {

    pais: string;
    idioma: string;
   

}

export interface usuarioLogueado {

    user:{
        id: string;
        email: string;
        username: string;
        name: string;
        profilePictureUrl: string;
    },
    jwt: string;
    
}