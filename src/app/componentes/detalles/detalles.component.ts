import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
curr!:any
lenguaje!:any
paisesLimitrofes!:any
//se crea una propiedad dato$
  dato$:Observable<Persona>
  constructor(private servicio:ServiceService, private router: Router) { 
    //se le asigna a dato$ el valor que PROVIENE DEL SERVICIO
    this.dato$ = this.servicio.getSharingObservable;
    
  }

  ngOnInit(): void {

   this.dato$.subscribe(data => {
    this.pais = data.name
    console.log(this.pais)
    
   })

   this.servicio.buscarPorNombre(this.pais).subscribe(data =>{
      this.dataPais = data[0]
      console.log(this.dataPais.flags.png)
      //Se obtienen los valores del objeto "currencies" y los convierte en un array
      this.curr = Object.values(this.dataPais.currencies)
      //Se obtienen los valores del objeto "languages"
      this.lenguaje = Object.values(this.dataPais.languages)

      //Obtiene los paises limitrofes
      this.paisesLimitrofes = this.servicio.buscarPorCodigo(this.dataPais.borders).subscribe((res:any) =>{
        console.log(res)
        this.paisesLimitrofes = res

      })
    
   })
      
  }
  // llamada desde la vista. Toma un array de objetos, lo convierte en string y separa sus elementos con coma 
  // Retorna el resultado a la vista, que es donde se llama a esta funcion
  currencieComma(moneda:any){
    return moneda.map((elemento:any) => elemento.name).join(', ')
  }
  // llamada desde la vista. toma un array y los convierte en un string de elementos separados por coma
  lenguajeComma(leng:any){
    return leng.join(', ')
  }
  //Redirecciona al pais limitrofe seleccionado en la seccion: "Border Countries"
  paisSeleccionado(seleccion:any){
    this.servicio.buscarPorNombre(seleccion.name.common).subscribe((res) => {
      this.dataPais = res[0]
      this.router.navigate(['detalles'])
      //Se obtienen los valores del objeto "currencies" y los convierte en un array
      this.curr = Object.values(this.dataPais.currencies)
      //Se obtienen los valores del objeto "languages"
      this.lenguaje = Object.values(this.dataPais.languages)

      //Obtiene los paises limitrofes
      this.paisesLimitrofes = this.servicio.buscarPorCodigo(this.dataPais.borders).subscribe((res:any) =>{
        console.log(res)
        this.paisesLimitrofes = res

      })
      
    })
    
  }

}

  

