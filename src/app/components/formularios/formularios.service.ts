import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Formularios } from '../formularios';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  private readonly API = '/api/alticci';
  constructor(private httpClient: HttpClient) { }

  findAlticciByPosition({ posicao }: { posicao: number; }): Observable<Formularios> {
    const url = `${this.API}/${posicao}`
    return this.httpClient.get<Formularios>(url);
  }

}
