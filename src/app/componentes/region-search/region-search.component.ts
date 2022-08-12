import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/servicios/dark-mode.service';
import { RegionService } from 'src/app/servicios/region.service';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.scss']
})
export class RegionSearchComponent implements OnInit {
  regSeleccionada!:any
  darkMode$: Observable<any>

  constructor(private servicio:ServiceService, private regionservice:RegionService, private darkmodeservice:DarkModeService) {
    this.darkMode$ = darkmodeservice.getDarkModeObservable
  }

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
