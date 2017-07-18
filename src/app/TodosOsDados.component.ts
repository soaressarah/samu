import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './TodosOsDados.component.html',
  styleUrls: ['./app.component.css']
})
export class TodosOsDadosComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    uf_dada : UF;
    municipios_atendidos: Dados[] = [];
    media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf_dada = this.ufService.getPorID(43);
        this.municipios_atendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf_dada);
        this.media = this.calculoDeMedia();
    }

    defineUF(): void {
      for(let uf_dada of this.ufs){
        if (uf_dada.id == 51) this.uf_dada = uf_dada;
      }
}

    calculoDeMedia(): number {
      var qtd = 0;
      var total = 0;
      for(let mun of this.municipios_atendidos){
        if(mun.uf_id == 43){
          qtd++;
          total += mun.valor;
        }
      return Math.round(total/qtd);
    }
  }
}
