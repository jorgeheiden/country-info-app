import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/servicios/dark-mode.service';
import { RegionService } from 'src/app/servicios/region.service';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss'],
  
})

export class CountryFlagComponent implements  OnInit {

  region$: Observable<any>
  paises:any;
  darkMode$: Observable<any>
  constructor(private servicio:ServiceService, 
    private router:Router, 
    private regionservice:RegionService,
    private darkmodeservice : DarkModeService
    ) {

    this.region$ = regionservice.getRegion
    this.darkMode$ = darkmodeservice.getDarkModeObservable
   }
 

  ngOnInit(): void {

    this.servicio.obtenerDatos().subscribe(data =>{
      console.log(data[26])
      this.paises = data
      
    })

    this.region$.subscribe((data) =>{
      this.servicio.buscarPorRegion(data).subscribe((dato:any) =>{
      this.paises = dato
      })
    })


  }
 
  clickCard(pais:any){
    this.servicio.setSharingObservableDato = {name: pais}
    this.router.navigate(['detalles'])
  }


}
