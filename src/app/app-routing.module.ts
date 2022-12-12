import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp01Component } from './componente/comp01/comp01.component';
import { Comp02Component } from './componente/comp02/comp02.component';
import { Comp03Component } from './componente/comp03/comp03.component';
import { Comp04Component } from './componente/comp04/comp04.component';
import { Comp05Component } from './componente/comp05/comp05.component';
import { Comp06Component } from './componente/comp06/comp06.component';
import { Comp07Component } from './componente/comp07/comp07.component';
import { Comp08Component } from './componente/comp08/comp08.component';
import { Comp09Component } from './componente/comp09/comp09.component';
import { Comp10Component } from './componente/comp10/comp10.component';
import { Comp11Component } from './componente/comp11/comp11.component';
import { Comp13Component } from './componente/comp13/comp13.component';
import { Comp14Component } from './componente/comp14/comp14.component';

const routes: Routes = [
  { path: 'Menu01', component:    Comp01Component},
  { path: 'Menu02', component:    Comp02Component },
  { path: 'Menu04', component:    Comp04Component },
  { path: 'Menu05', component:    Comp05Component },
  { path: 'Menu06', component:    Comp06Component },
  { path: 'Menu07', component:    Comp07Component },
  { path: 'Menu08', component:    Comp08Component },
  { path: 'Menu09', component:    Comp09Component },
  { path: 'Menu11', component:    Comp11Component },
  { path: 'SubMenu03', component: Comp03Component ,
      children: [
        { path: 'SubElemento01', component: Comp10Component }      
      ]
    },
    { path: 'Menu13', component:    Comp13Component },
    { path: 'Menu14', component:    Comp14Component },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
<a [routerLink]="'/Menu01'">-- Menu 1</a><br>
<a [routerLink]="'/Menu02'">Form Data Driven - Simples</a><br>
<a [routerLink]="'/Menu04'">Form Modules - Simples</a><br>
<a [routerLink]="'/Menu07'">Form Modules - Validação</a><br>
<a [routerLink]="'/Menu09'">Form Data Driven - Validação</a><br>
<a [routerLink]="'/Menu08'">Form  - Evento</a><br>
<a [routerLink]="'/Menu05'">Form Modules - Combos\list\auto complet</a><br>
<a [routerLink]="'/Menu06'">Form Modules - tabela</a><br>
<a [routerLink]="'/SubMenu03'">-- Menu 3</a><br>
<a [routerLink]="'/Menu11'">Serviços</a><br>
*/