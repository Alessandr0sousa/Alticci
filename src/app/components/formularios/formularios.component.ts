import { FormulariosService } from './formularios.service';
import { Component, OnInit } from '@angular/core';
import { Formularios } from '../formularios';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {


  posicao: any;
  btnConsulta: String = "Consultar";
  alticcis: Formularios[] = [];

  alticci: Formularios = {
    sequencia: 0,
    posicao: 0
  }

  constructor(private service: FormulariosService){}

  ngOnInit(): void {}

  findAlticciByPosition(){
    this.service.findAlticciByPosition({ posicao: this.posicao }).subscribe((alticci)=>{
      this.alticci = alticci;
      console.log(this.alticci)
    });
  }
}
