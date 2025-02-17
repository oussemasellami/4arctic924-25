import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceComponent } from './residence/residence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApproutingModule } from './approuting.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormResidenceComponent } from './form-residence/form-residence.component'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    NotfoundComponent,
    FormResidenceComponent,
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnnonceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
