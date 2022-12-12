import { Component, OnInit } from '@angular/core';
import { Servidor } from 'src/app/servico/servidor';
import { Dados } from 'src/app/model/dados';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.css']
})
export class Comp11Component implements OnInit {

  lista: Dados[] = []; 
  constructor(private srv: Servidor) { }
  ind: number;

  ngOnInit(): void {
  }

  clicados(){
    this.srv.Teste().subscribe( ); 
  }

  clicaNum(){
    let valor: Number;
    this.srv.getTesteNumero().subscribe(vlr => {
      valor = vlr;
      console.log(valor);   
    }); 
  }

  clicando(){
    console.log('Vai executar ' + this.srv.testando());
  }

  listar(){
    this.srv.listar()
    .subscribe( res => {
      this.lista = res;
      console.log(this.lista);
    }, err => {
      console.log(err);
    });    
  }

  consultar(){    
    let dado: Dados;
    this.srv.consultar(this.ind - 1)
    .subscribe(res => {
       dado = res;             
      console.log(dado);
    }, err => {
      console.log(err);
    });
  }

  inserir(){
    const valor = new Dados("novo", 1000); // gera um objeto
    this.srv.inserir(valor).subscribe(res => {
        console.log("inseriu");
    }, err => {
        console.log(err); 
    });
  }

  excluir(){
    this.srv.excluir(this.ind - 1)
    .subscribe(res => {
        console.log("exclui");
    }, err => {
        console.log(err); 
    });
  }

  alterar(){
    this.srv.alterar(this.lista[this.ind - 1])
    .subscribe(res => {
        console.log("alterou");
    }, err => {
        console.log(err); 
    });
  }

/*



*/
}

/*
 export class PgCadastroStatusComponent implements OnInit {
 

  form: FormGroup;
  listaStatus: Status[] = []; 
  errosServico: String[];
  idStatusEscolhido: number;
  mensagem: string;
  tipoMensagem: string;
  isInsercao:boolean = true;  
  statusEscolhido: Status;

  constructor(private statusService: StatusService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group ({
      id: [null,  null] ,
      codigo: [null,  ValidadorCadastroStatus.verificaCodigoStatus] ,
      tipo: [null, ValidadorCadastroStatus.verificaTipoStatus]
    }); 
    this.carregarStatus();    
  }

  // carrega a lista de status na tabela
  carregarStatus(){
    this.statusService.listarStatus()
    .subscribe( res => {
      this.listaStatus =[],
      this.listaStatus = res;
      //console.log(this.listaStatus);
    }, err => {
      console.log(err);
    });
  }

  // mensagem de erro usada nos campos do formulário
  mensagensErro(campo) {
    let control = this.form.get(campo);
    let mensagens = '';

    for (const erro in control.errors) {
      if (control.errors.hasOwnProperty(erro) && control.touched && control.errors[erro] != true) {
          mensagens += control.errors[erro];
      }
    }

    return mensagens;
  }

  // busca um status para edição
  selecionarStatus(statusEscolhido: Status){    
    this.isInsercao = false;
    this.statusService.buscarStatus(statusEscolhido.codigo)
    .subscribe(res => {
       this.statusEscolhido = res;
       this.form.patchValue({
        id: res.id, 
        codigo: res.codigo,
        tipo: res.tipo,
        dataSincronizacao: res.dataSincronizacao,
        dataModificacao: res.dataModificacao
      });      
      console.log(this.form.value);
    }, err => {
      console.log(err);
    });
  }

  salvarStatus() {    
    this.mensagem = null;
     if(this.isInsercao) {

      this.inserir();
      
     } else {
      this.alterar();
     }
  }

  inserir(){
    this.statusService.inserirStatus(this.form.value)
        .subscribe(res => {
            this.carregarStatus();
            console.log(this.listaStatus);
            this.tipoMensagem = "success";
            this.mensagem = "Status cadastrado com sucesso."; 
            this.resetar();   
            this.scrollTop();
            setTimeout(()=>{
              this.mensagem = null;
            }, 5000); 
        }, err => {
            console.log(err);
            this.tipoMensagem = "danger";
            this.mensagem = "Código ou tipo já cadastrados";
            this.scrollTop();
            setTimeout(()=>{
              this.mensagem = null;
            }, 15000); 
        });
  }
  
  alterar(){
    this.statusService.atualizarStatus(this.form.value)
    .subscribe(res => {
            this.carregarStatus();
            console.log(this.listaStatus);
            this.tipoMensagem = "success";
            this.mensagem = "Status alterado com sucesso.";      
            this.resetar(); 
            this.scrollTop();
            setTimeout(()=>{
              this.mensagem = null;
            }, 5000); 
    }, err => {
            console.log(err);
            this.tipoMensagem = "danger";
            this.mensagem = "Código ou tipo já cadastrados";
            this.scrollTop();
            setTimeout(()=>{
              this.mensagem = null;
            }, 15000); 
    });
}

selecionarStatusExclusao(status: Status) {
  this.statusEscolhido = status;
  this.errosServico = null;
}

excluirStatus() {  
  this.statusService.deletarStatus(this.statusEscolhido.id)
    .subscribe(res => {
      this.carregarStatus();
      console.log(res);
      this.tipoMensagem = "success";
      this.mensagem = 'Status excluído com sucesso'
      this.scrollTop();
      setTimeout(()=>{
        this.mensagem = null;
      }, 5000); 
    }, err => {
      console.log(err);
      this.errosServico = err.error;
      this.scrollTop();
      setTimeout(()=>{
        this.mensagem = null;
      }, 15000); 
    });
    this.statusEscolhido = null;
  }

}

*/