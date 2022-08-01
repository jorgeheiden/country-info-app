import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all')
  }
  buscarPorNombre(pais:any): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${pais}`)
  }

}
