import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/servicios/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paisBusc:any

  darkMode$: Observable<any>
  constructor(private darkmodeservice: DarkModeService) { 
    this.darkMode$ = darkmodeservice.getDarkModeObservable
  }

  
  ngOnInit(): void {
    
  }

  paisBuscado(evento:String){
    this.paisBusc = evento
    console.log("componente padre HOME: "+ this.paisBusc)
  }
  
}
