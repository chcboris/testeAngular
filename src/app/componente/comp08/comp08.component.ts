import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comp08',
  templateUrl: './comp08.component.html',
  styleUrls: ['./comp08.component.css']
})

export class Comp08Component implements OnInit {

  myForm: FormGroup;
  vtxt: String;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      campo1: [],
      campo2:[]
    })
  }

  alterarTexto(){
   console.log(this.myForm.get('campo1').value);
  }

  submeteu(){
    console.log(this.myForm);
  }

}
