import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators} from '@angular/forms'
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  //Se envia el pais buscado desde le <input> al componente padre home
  @Output() enviarDatoCompPadre = new EventEmitter<string>()
  
  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    //*LLAMADO A LA FUNCION
    this.buscar()
  }
    
  inputForm = new FormControl('', [Validators.required])
  
  buscar(){
    //BUSQUEDA AUTOMATICA:
    //debounceTime() Metodo que emite una vez que pasaron los milisegundos estableidos
    //distinctUntilChanged() Si se busco un valor previamente ej: "Argentina" y se busca nuevamente el 
    //mismo valor "Argentina" evita que se emita nuevamente
    //****IMPORTAR: MAP, FILTER, TAP
    this.inputForm.valueChanges
    .pipe(
      map( (busqueda:string) => busqueda.trim()),
      debounceTime(600),
      distinctUntilChanged(),
      filter( (busqueda:string) => busqueda !== ''),
      //Se emite la busqueda al componente padre
      tap( (busqueda:string) => this.enviarDatoCompPadre.emit(busqueda))
    )
    .subscribe();
    
  }
  
}
