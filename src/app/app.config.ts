import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DescuentosComponent } from './secciones/descuentos/descuentos.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp({
      "projectId":"lizana-ecomerce",
      "appId":"1:917044220178:web:39ea71112eb8c2108ea3cb",
      "storageBucket":"lizana-ecomerce.appspot.com",

      "apiKey":"AIzaSyAc1ROjeqElllr94SO74DYqr2b8FS7TZD8",
      "authDomain":"lizana-ecomerce.firebaseapp.com",
      "messagingSenderId":"917044220178"})), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()), 
      provideStorage(() => getStorage()),
  ]
};
