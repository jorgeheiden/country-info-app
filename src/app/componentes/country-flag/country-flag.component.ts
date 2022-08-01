import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent implements OnInit {

  constructor(private servicio:ServiceService) { }
  paises:any;
  ngOnInit(): void {

    this.servicio.obtenerDatos().subscribe(data =>{
      console.log(data[26])
      this.paises = data

    })
  }

}
