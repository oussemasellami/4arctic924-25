import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  listfavoris:Residence[]=[]
search=""
num!:number
listserviceresidence:Residence[]=[]
constructor(private resservice:ResidenceService){}
  ngOnInit(): void {
   this.resservice.getallResidence().subscribe((data)=>{
this.listserviceresidence=data
   })
  }


  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Arij","address":"inconnu", "image":"../../assets/images/residence3.jpg", status: "En Construction"}
   ];
   showalertinconnu(residence:Residence){
    if(residence.address=="inconnu"){
      alert("adress:inconnu")
    }else{
      alert("adress : "+residence.address)
    }
   }

   addlistfavoris(res:Residence){
    const index=this.listfavoris.findIndex(r=>r.id==res.id)
    if(index>-1){
      this.listfavoris.splice(index,1)

    }else{
      this.listfavoris.push(res)
      console.log("Ma liste de favoris: "+JSON.stringify(this.listfavoris))
    }
   }


   isverif(res:Residence){
      return this.listfavoris.some(r=>r.id==res.id)
   }

searchbyname(){
console.log(this.listserviceresidence)
  return this.listserviceresidence.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase()))
}


shownumber(){
  return this.num=this.resservice.getnumberinlist(this.listResidences,"name","El Arij")
}

deleteResidence(id:any){
  this.resservice.deleteResidence(id).subscribe(()=>{
    console.log('deleted')
    //window.location.reload()
    this.ngOnInit()
  })

}
}
