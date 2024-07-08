import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, from, map } from 'rxjs';
import { firebaseConfig } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Firestore, getDocs, query, where, } from '@angular/fire/firestore';
import { collection,addDoc ,doc,getDoc} from 'firebase/firestore';
import { ElementSchemaRegistry } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  getCompras() {
    throw new Error('Method not implemented.');
  }

  app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  db = getFirestore(this.app);
  userData:any;
 


  constructor(private _router : Router , private _db:Firestore ) { }

  
  async loginService( email: string, password: string) {
    try{
      
    }catch(error){

    }

  }



     //login con email y password
  async login(email:string, password: string) {

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
     
      if(user === null){
        console.log('Usuario no encontrado');
      }else{
        const uid = user.uid;
        localStorage.setItem('uid', uid);
        
     
        const data = this.getDocumentsByField('users', 'uid', uid);
        data.subscribe((data) => { 
          const userData = data[0];
          
          this.userData = userData;
         

        })
        
          this._router.navigate(['/home']);
        
        }
    
    } catch (error) {
      console.log(error);
    }

    
    
  }

  async logeinCOnGoogle(){

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try{
      const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const uid = user.uid;
    localStorage.setItem('uid', uid);

    }catch(error){}

     

  }

  async registerConGoogle() {

    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      user.photoURL

      console.log(user);

      const uid = user.uid;
      localStorage.setItem('uid', uid);
    }catch(error){

    }

  }
  

  //register con firebase
  async registerConFirebase(email: string, password: string, adicional: any): Promise<any> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      
      const uuid = user.uid;
  
      const data = {
        email: email,
        uid: uuid ,
        ...adicional  
      };
      this.guardarDatosFirestore(data);
      this._router.navigate(['/profile/login']);
  
      console.log('Usuario registrado con éxito');
  
      
  
    } catch (error) {
      console.log(error);
    }
  }
  
  //register con google


  

  

// agregar datos a la firestore

    guardarDatosFirestore(data: any): Promise<any> {
      return addDoc(collection(this.db, 'users'), data);
    }


    //obtener un usuario por uuid desde firestore
    async consultarDatosFirestore(uid: string): Promise<any> {

      try{
        
        const docRef = doc(this.db, 'users', uid);
        const docSnap = await getDoc(docRef);

        


      }catch(error){

    }
      
  }
      
      
  getDocumentsByField(collectionName: string, field: string, value: any): Observable<any[]> {
    const q = query(collection(this.db, collectionName), where(field, '==', value));
    return from(getDocs(q)).pipe(
        map(querySnapshot => {
            let docs: any[] = [];
            querySnapshot.forEach((doc) => {
                docs.push(doc.data());
            });
            return docs;
        })
      );
    }

      
    getUserData(){
      return this.userData;
    }
    //return this.db.collection('users').valueChanges();
    isLogged(): Observable<boolean>{
      return new Observable<boolean>((observer) => {
        this.auth.onAuthStateChanged((user) => {
          if(user){
            observer.next(true);
          }else{
            observer.next(false);
          }
        });



    }
    );



  }

   //obtener token de usuario
  async getToken():Promise<String>{
    const user = this.auth.currentUser;
    if(user){
      return user.getIdToken();

    }else{
      return '';
    }
  }

  logout(){
    this.auth.signOut().then(() => {
      localStorage.removeItem('uid');
      
    });

  }
 
    
}

