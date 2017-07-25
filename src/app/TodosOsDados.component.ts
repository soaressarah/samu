import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {DadoNome} from './types/newModel';
import {newModelService} from './services/newModel.service'

import {UFs} from './services/mock-ufs';
import {VALORES} from './services/mock-samu_municipios_atendidos_por_estado';

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
    samu : Dados[];
    dados : DadoNome[]

    constructor(private ufService: UFService, private samuService: SamuService, private modeloNovoService: newModelService)
    { }

    ngOnInit(): void {
        this.dados = this.modeloNovoService.juntandoDados();
    }
 }
