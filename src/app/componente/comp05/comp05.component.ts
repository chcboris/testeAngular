import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comp05',
  templateUrl: './comp05.component.html',
  styleUrls: ['./comp05.component.css']
})
export class Comp05Component implements OnInit {
  
  sel: String;
  lst: object = [{ id: 1, letra: 'abc' }, { id: 2, letra: 'babc' }, { id: 3, letra: 'cbcd' }, { id: 4, letra: 'dcde' }];
  lista: String[];
  auto: String;

  constructor() { }

  ngOnInit(): void {
  }

  submeteu(mf: NgForm){
  ;
    console.log(mf); 
   
    console.log(this.sel);
    console.log(this.auto);
    console.log(this.lista[0]);
  }

}
