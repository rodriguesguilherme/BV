import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private readonly API = 'http://localhost:3000/pokemons'

  constructor(private http: HttpClient) { }

  listarPokemon$ = this.http.get<Pokemon[]>(this.API).pipe(
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
