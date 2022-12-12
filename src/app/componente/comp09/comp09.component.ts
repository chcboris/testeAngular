import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validacoes} from './validacoes';

@Component({
  selector: 'app-comp09',
  templateUrl: './comp09.component.html',
  styleUrls: ['./comp09.component.css']
})
export class Comp09Component implements OnInit {

  myForm: FormGroup;
  // myForm: FormGroup;
  // vtxt: String;

  // constructor(private formBuilder: FormBuilder) { }
  constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {
    
  //   this.myForm = this.formBuilder.group({
  //     texto: ['txt',Validators.required],
  //     email:[],
  //     url:[],
  //     numero:[],
  //     datas:[],
  //     tempo:[],
  //     mes:[],
  //     semana:[],
  //     senha:[],
  //     tel:[],
  //     combo: [null], 
  //     lst: [null],
  //     opcao:['A'],
  //     checar:[],
  //     area:['area de texto'],
  //     novoTxt:[]
  //   })
  // }

   ngOnInit(): void {
    
    const fb = this.formBuilder;
    this.myForm = fb.group({
      texto1: [null, Validators.required],
      texto2: [null, Validators.minLength(3)],
      texto3: [null, Validators.maxLength(4)],
      texto4: [null, Validators.email],
      texto5: [null, Validators.pattern('[a-z]')],
      texto6: [null, [Validacoes.Validando]],
    //  texto7: [null, Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

  

  get texto1() {
    return this.myForm.get('texto1');
  }

  get texto2() {
    return this.myForm.get('texto2');
  }
  get texto3() {
    return this.myForm.get('texto3');
  }
  get texto4() {
    return this.myForm.get('texto4');
  }
  get texto5() {
    return this.myForm.get('texto5');
  }
 
  get texto6() {
    return this.myForm.get('texto6');
  }

/*  get texto7() {
    return this.myForm.get('texto7');
  }
*/

  /*static
  alterarTexto(){
   console.log(this.myForm.get('texto1').value);
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
   }*/

   clicou(){
    console.log('clicou');
   }

   submeteu(){
    console.log(this.myForm);
   }

}
