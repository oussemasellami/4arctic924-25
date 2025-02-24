import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
UrlResidence="http://localhost:3000/residences"
  constructor(private http:HttpClient) { }

  getnumberinlist(list:any,creteria:any,value:any){
    let n=0
    for(let i in list){

      if(list[i][creteria]==value){
        n++
      }
    }
return n
  }


  getallResidence():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.UrlResidence)
  }
  addResidence(res:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>(this.UrlResidence,res)
  }
  updateResidence(res:Residence,id:any):Observable<Residence[]>{
    return this.http.put<Residence[]>(this.UrlResidence+'/'+id,res)
  }
  getResidence(id:any):Observable<Residence>{
    return this.http.get<Residence>(this.UrlResidence+'/'+id)
  }
  deleteResidence(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>(this.UrlResidence+'/'+id)
  }
}
