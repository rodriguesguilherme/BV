import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/pokemons'

  constructor( private http: HttpClient ) { }

  cadastrarPokemon(dados) {
    return this.http.post<Pokemon[]>(this.API, dados).pipe(
      map(res => {
        console.log(res)
        return res
      }),
      catchError(error => {
        console.log(error)
        return error
      })
    )
  }
}
