export class Dados {

    private id: number;
    private descr: string; // public
    private valor: number;
 
    constructor ( d:string, valor: number){
        this.descr = d;
        this.valor = valor;
    }    

    setId(id: number)  { this.id = id; }
    getId() :number { return this.id; }   
        
    setDescr(d: string){ this.descr = d; }
    getDescr(): string{ return this.descr; }

    setValor(v: number)  { this.valor = v; }
    getValor() :number { return this.valor; }     
}
