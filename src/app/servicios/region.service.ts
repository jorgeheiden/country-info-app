import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  private regionPrivate: BehaviorSubject<any> = new BehaviorSubject("")

  get getRegion(){
    return this.regionPrivate.asObservable()
  }

  set setRegion(data:any){
    this.regionPrivate.next(data)
  }
}
