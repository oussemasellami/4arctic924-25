import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListannonceComponent,
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
  ]
})
export class AnnonceModule { }
