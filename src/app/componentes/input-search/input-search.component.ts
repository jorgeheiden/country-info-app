import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms'
import { ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }
    
  inputForm = new FormControl('', [Validators.required])
  paisBuscado:any
  buscar(){
    console.log(this.inputForm.value)
    this.servicio.buscarPorNombre(this.inputForm.value).subscribe(data=>{
      console.log(data[0].name)
      this.paisBuscado = data
      console.log(this.paisBuscado[0].name)
    })
  }
}
