import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {ResumoComponent} from './Resumo.component';
import {TodosOsDadosComponent} from './TodosOsDados.component';
import {DadosUfComponent} from './DadosUF.component';

import { RouterModule }   from '@angular/router';

import {UFService} from './services/uf.service'
import {SamuService} from './services/samu.service'

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    TodosOsDadosComponent,
    DadosUfComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
    path: 'resumo',
    component: ResumoComponent
  },
  {
    path: 'dadosuf',
    component: DadosUfComponent
  },
{
path: 'todososdados',
component: TodosOsDadosComponent
}
    ])
  ],
  providers: [SamuService, UFService],
  bootstrap: [AppComponent]
})
export class AppModule { }
