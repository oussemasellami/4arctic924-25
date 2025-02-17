import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { ListannonceComponent } from './listannonce/listannonce.component';
import { NotfoundComponent } from '../notfound/notfound.component';


const routes:Routes=[
  {path:'annonce',component:AnnonceComponent,
    
    children:[
{path:'listannonce',component:ListannonceComponent},
  ]},
  {path:'**',component: NotfoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[RouterModule]
})
export class AnnonceRoutingModule { }
