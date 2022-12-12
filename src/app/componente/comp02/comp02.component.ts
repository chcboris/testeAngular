import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comp02',
  templateUrl: './comp02.component.html',
  styleUrls: ['./comp02.component.css']
})
export class Comp02Component implements OnInit {

  myForm: FormGroup;
  vtxt: String;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      texto: ['txt'],
      email:[],
      url:[],
      numero:[],
      datas:[],
      tempo:[],
      mes:[],
      semana:[],
      senha:[],
      tel:[],
      combo: [null], 
      lst: [null],
      opcao:['A'],
      checar:[],
      area:['area de texto'],
      novoTxt:[]
    })
  }

  alterarTexto(){
   console.log(this.myForm.get('texto').value);
  }

  alterarCombo(){
    console.log(this.myForm.get('combo').value);
   }

   alterarLista(){
    console.log(this.myForm.get('lst').value);
   }

   alterarEmail(){
    console.log(this.myForm.get('email').value);
   }

   alterarURL(){
    console.log(this.myForm.get('url').value);
  }

  alterarNumero(){
    console.log(this.myForm.get('numero').value);
  }

  alterarData(){
    console.log(this.myForm.get('datas').value);
  }

  alterarTempo(){
    console.log(this.myForm.get('tempo').value);
  }

  alterarMes(){
    console.log(this.myForm.get('mes').value);
  }
  
  alterarSemana(){
    console.log(this.myForm.get('semana').value);
  }

  alterarSenha(){
    console.log(this.myForm.get('senha').value);
  }

  alterarTel(){
    console.log(this.myForm.get('tel').value);
  }

  alterarOpcao(){
    console.log(this.myForm.get('opcao').value);
  }

  alterarChecar(){
    console.log(this.myForm.get('checar').value);
  }

  alterarTexto_2(){
    console.log(this.myForm.get('novoTxt').value);
   }

   clicou(){
    console.log('clicou');
   }

   submeteu(){
    console.log(this.myForm);
   }

}
