import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss'],
  
})

export class CountryFlagComponent implements  OnInit {

//Se utiliza GETTER AND SETTER para seguir los cambios del input del componente input-search 
//desde el componente HOME y llamar a un metodo
//para buscar el pais
  private _pais:any
  get paisBuscado(){
    return this._pais
  }
  //Se utiliza el decorador @input para recibir los datos del componente
  //padre home.component
  @Input()
  set paisBuscado(value:any){
    this._pais = value
    this.valorDesdeHome(value)
  }

  valorDesdeHome(valor:any){
    console.log("componente country-flag: "+valor)


  }



  constructor(private servicio:ServiceService) { }

  paises:any;
  ngOnInit(): void {

    this.servicio.obtenerDatos().subscribe(data =>{
      console.log(data[26])
      this.paises = data
      
    })
  }
 

}
