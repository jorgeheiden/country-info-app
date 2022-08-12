import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/servicios/dark-mode.service';

@Component({
  selector: 'app-superior-bar',
  templateUrl: './superior-bar.component.html',
  styleUrls: ['./superior-bar.component.scss']
})
export class SuperiorBarComponent implements OnInit {

  darkMode$: Observable<any>
  icono = "../../../assets/Imagenes/Iconos/moon-outline.svg"
  constructor(private darkmodeservice: DarkModeService) {
    this.darkMode$ = darkmodeservice.getDarkModeObservable
   }

   darkModeData!:any

   condicionalNgClass!:any
  ngOnInit(): void {
    this.darkMode$.subscribe((dato:any) =>{
      this.darkModeData = dato
      
      if(this.darkModeData.valor == false){
        this.icono = "../../../assets/Imagenes/Iconos/moon-outline.svg"
      }
      else{
        this.icono = "../../../assets/Imagenes/Iconos/moon-white.png"
      }
    })
    
    this.condicionalNgClass = this.darkModeData.valor
  }

  
  modoNocheClick(){

    if(this.darkModeData.valor == false){
      this.darkmodeservice.setDarkMode = {valor : true}
      this.condicionalNgClass = this.darkModeData.valor
      this.icono = "../../../assets/Imagenes/Iconos/moon-white.png"
    }
    else{
      this.darkmodeservice.setDarkMode = {valor : false}
      this.condicionalNgClass = this.darkModeData.valor
      this.icono = "../../../assets/Imagenes/Iconos/moon-outline.svg"
    }
    console.log(this.darkModeData.valor)
  }


}
