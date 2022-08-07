import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

//1- Se crea una interface
export interface Persona {
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //2- crear una propiedad BehavirSubject con un valor predeterminador: name:""
  private sharingObservablePrivate: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({name: 'pais seleccionado de prueba'})
  
  //3- Permite obtener el valor desde un componente
  get getSharingObservable(){
    return this.sharingObservablePrivate.asObservable()
  }
  //4- Permite establecer el valor de la propiedad "sharingObsevablePrivate" desde un componente
  set setSharingObservableDato(dato:Persona){
    this.sharingObservablePrivate.next(dato);
  }

  constructor(private http:HttpClient) { }


  obtenerDatos(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all')
  }
  buscarPorNombre(pais:any): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${pais}`)
    
  }
 buscarPorCodigo(codigos:any){
  return this.http.get<any>(`https://restcountries.com/v3.1/alpha?codes=${codigos.join(',')}`)
 }

}
