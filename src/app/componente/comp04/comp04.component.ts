import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comp04',
  templateUrl: './comp04.component.html',
  styleUrls: ['./comp04.component.css']
})
export class Comp04Component implements OnInit {

  texto: String;
	email: String; 
	url: String; 
	num: String; 
	dt: String; 
	tm: String;  
	mes: String; 
	sem: String; 
	senha: String;
	tel: String;
	lbl: String;
  area: String;
  escolha: String;
  chk: String;
  sel: String;

  lst: object = [{ id: 1, letra: 'a' }, { id: 2, letra: 'b' }, { id: 3, letra: 'c' }, { id: 4, letra: 'd' }];

  constructor() { }

  ngOnInit(): void {
    this.texto = 'teste';
  }

  clicou(): void{
    console.log('clicou');
   }

  submeteu(mf: NgForm){
    console.log(this.texto);
    console.log(mf); 
    console.log(this.email); 
    console.log(this.url); 
    console.log(this.num); 
    console.log(this. dt); 
    console.log(this.tm);  
    console.log(this.mes); 
    console.log(this.sem); 
    console.log(this.senha);
    console.log(this.tel);
    console.log(this.lbl);
    console.log(this.area);
    console.log(this.escolha);
    console.log(this.chk);
    console.log(this.sel);
  }
}
