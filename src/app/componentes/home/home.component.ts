import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paisBusc:any
  constructor() { }

  ngOnInit(): void {
  }

  paisBuscado(evento:String){
    this.paisBusc = evento
    console.log("componente padre HOME: "+ this.paisBusc)
  }
  
}
