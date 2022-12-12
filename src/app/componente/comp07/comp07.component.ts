import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-comp07',
  templateUrl: './comp07.component.html',
  styleUrls: ['./comp07.component.css']
})
export class Comp07Component implements OnInit {
  ativa : Boolean = true;
  campo1: String;
	campo2: String; 
  campo3: String;
  campo41: String; 
  campo4: String;
  campo5: String; 
  
  constructor() { }

  ngOnInit(): void {
    
  }
 
  habilita(campo: String): void{
   if(campo == '')
    this.ativa = true;
   else
    this.ativa = false;
  }

  habilitado():Boolean{
    return  this.ativa;
  }

  submeteu(mf: NgForm){    
    console.log(mf);   
  }

  resetou(mf: NgForm){
    mf.reset();
    this.ativa = true;
  }
}
