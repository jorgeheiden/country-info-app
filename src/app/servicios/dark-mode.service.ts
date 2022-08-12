import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  
  private darkModePrivate: BehaviorSubject<any> = new BehaviorSubject<any>({ valor: false})

  get getDarkModeObservable(){
    return this.darkModePrivate.asObservable()
  }

  set setDarkMode(dato:any){
    this.darkModePrivate.next(dato)
  }


  constructor() { }


}
