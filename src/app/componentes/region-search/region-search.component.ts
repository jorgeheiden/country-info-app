import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegionService } from 'src/app/servicios/region.service';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.scss']
})
export class RegionSearchComponent implements OnInit {
  regSeleccionada!:any

  constructor(private servicio:ServiceService, private regionservice:RegionService) {}

  ngOnInit(): void {
    
  }

  selectForm = new FormGroup({
    region: new FormControl('')
  })
 
  regionSeleccionada(){
    this.regSeleccionada = this.selectForm.get('region')?.value
    
    this.regionservice.setRegion = this.regSeleccionada

    
  }
  
}
