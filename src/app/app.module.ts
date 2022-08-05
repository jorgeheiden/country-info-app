import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperiorBarComponent } from './componentes/superior-bar/superior-bar.component';
import { InputSearchComponent } from './componentes/input-search/input-search.component';
import { RegionSearchComponent } from './componentes/region-search/region-search.component';
import { CountryFlagComponent } from './componentes/country-flag/country-flag.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetallesComponent } from './componentes/detalles/detalles.component'

@NgModule({
  declarations: [
    AppComponent,
    SuperiorBarComponent,
    InputSearchComponent,
    RegionSearchComponent,
    CountryFlagComponent,
    HomeComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
