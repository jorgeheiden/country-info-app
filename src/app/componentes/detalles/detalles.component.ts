import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//Importar la interface Persona creada en el servicio
import {Persona, ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
pais!:any
dataPais!:any
//se crea una propiedad dato$
  dato$:Observable<Persona>
  constructor(private servicio:ServiceService) { 
    //se le asigna a dato$ el valor que proviene del servicio
    this.dato$ = this.servicio.getSharingObservable;
    
  }

  ngOnInit(): void {

   this.dato$.subscribe(data => {
    this.pais = data.name
    console.log(this.pais)
   })

   this.servicio.buscarPorNombre(this.pais).subscribe(data =>{
      this.dataPais = data
      console.log(this.dataPais[0].flags.png)
   })

  }


}

  

