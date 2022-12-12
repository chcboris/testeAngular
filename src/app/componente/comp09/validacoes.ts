import { AbstractControl, FormControl } from '@angular/forms';



export class Validacoes{
/*
static Validando(controle: AbstractControl)
{
       // let valor = controle.get('texto6')?.value;
       let valor = controle.value;
        if(valor === 'a'){
            return null;
        }
        controle.get('texto6').setErrors({aval:true});
}
*/

static Validando(controle: FormControl)
{
       // let valor = controle.get('texto6')?.value;
       let valor = controle.value;
        if(valor === 'a'){
            return null;
        }
        //controle.get('texto6').setErrors({'aval':true});
        return {"aval":true};
}
}