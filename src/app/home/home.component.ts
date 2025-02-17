import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  name="salut 4 arcti 9"

  //proprty binding

  prop=false

  //event binding

  add(){
    console.log("salut 4 arctic 9")
  }

  //to way databinding

  nameuser="4arctic9"

}
