import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
id!:number
//...rayen hamdi....+5
listdetails:Residence=new Residence
  constructor(private act:ActivatedRoute,
    private resservice:ResidenceService,private router:Router){}

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']
    this.resservice.getResidence(this.id).
    subscribe((data)=>{
    this.listdetails=data
this.router
    })
  }

}
