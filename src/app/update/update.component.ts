import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  idupadate!:number
  formR!:FormGroup
  listupdateresidence:Residence=new Residence
  constructor(private act:ActivatedRoute,private resService:ResidenceService,private route:Router){

  }
  ngOnInit(): void {
    this.idupadate=this.act.snapshot.params['id']


    this.formR=new FormGroup({
    
      id:new FormControl('',[Validators.required,Validators.minLength(2)]),
      name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
      address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      image:new FormControl('',Validators.required),
      status:new FormControl('',[Validators.required,Validators.pattern(/^disponible+$/)])
    })
    this.resService.getResidence(this.idupadate).subscribe((data)=>{
this.listupdateresidence=data
console.log(this.listupdateresidence)

this.formR.patchValue(this.listupdateresidence as any)

    })
    
  }



  get name(){
    return this.formR.get('name')
  }

  get address(){
    return this.formR.get('address')
  }

  get status(){
    return this.formR.get('status')
  }

  update(){
    this.resService.updateResidence
    (this.formR.value,this.idupadate).subscribe(()=>{
this.route.navigate(['/residence'])
    })
  }

}
