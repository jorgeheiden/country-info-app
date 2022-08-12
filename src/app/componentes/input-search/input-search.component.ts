import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators} from '@angular/forms'
import { debounceTime, distinctUntilChanged, filter, map, Observable, tap } from 'rxjs';
import { DarkModeService } from 'src/app/servicios/dark-mode.service';
import {  ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  

  paisS:any
  //Se envia el pais buscado desde le <input> al componente padre home
  @Output() enviarDatoCompPadre = new EventEmitter<string>()

  darkMode$: Observable<any>
  constructor(private servicio:ServiceService, private darkmodeservice: DarkModeService) { 
    
    this.darkMode$ = darkmodeservice.getDarkModeObservable
  }

  ngOnInit(): void {
    //*LLAMADO A LA FUNCION
    this.buscar()


  }
    
  inputForm = new FormControl('', [Validators.required])
  resultadoBusqueda!:any;
  buscar(){
    //BUSQUEDA AUTOMATICA:
    //debounceTime() Metodo que emite una vez que pasaron los milisegundos estableidos
    //distinctUntilChanged() Si se busco un valor previamente ej: "Argentina" y se busca nuevamente el 
    //mismo valor "Argentina" evita que se emita nuevamente
    //****IMPORTAR: MAP, FILTER, TAP
    this.inputForm.valueChanges
    .pipe(
      map( (busqueda:string) => busqueda.trim()),
      debounceTime(300),
      distinctUntilChanged(),
      filter( (busqueda:string) => busqueda !== ''),
      //Se emite la busqueda 
      tap( (busqueda:string) => {
        this.enviarDatoCompPadre.emit(busqueda)

        this.servicio.buscarPorNombre(busqueda).subscribe(data =>{
         
           this.resultadoBusqueda = data
          console.log(this.resultadoBusqueda)
        })
    
      })
    )
    .subscribe();
    
  }
  paisSeleccionado(pais:string){
    this.paisS = pais
    console.log(this.paisS.name.common)
    this.resultadoBusqueda = []

   //Se envia un valor nuevo al servicio mediante el metodo Set
   this.servicio.setSharingObservableDato = {name: this.paisS.name.common}
  }

}
