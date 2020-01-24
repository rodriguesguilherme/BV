import { Component, OnInit } from '@angular/core';
import { ListarService } from '../services/listar.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-meus-pokemons',
  templateUrl: './meus-pokemons.component.html',
  styleUrls: ['./meus-pokemons.component.sass']
})
export class MeusPokemonsComponent implements OnInit {

  constructor(private listaService: ListarService) { }

  ngOnInit() {
  }

  left: number = 0;
  offset: number = 1090;
  id: number = 0;
  tamanhoArray: number = 0;

  listarPokemon$ = this.listaService.listarPokemon$.pipe(
    map(res => {
      let result: any = res
      this.tamanhoArray = result.length
      return res
    }),
    catchError(error => {
      console.log(error)
      return error
    })
  )

  move(index) {
    let slide = document.getElementById('estr-slides')
    this.id += index
    this.left = this.offset * this.id
    console.log(this.id)
    if (this.id > 0 || this.id <= -(this.tamanhoArray)) {
      this.left = 0
      this.id = 0
      slide.style.left = this.left + 'px'
    }
    console.log(this.left)
    slide.style.left = this.left + 'px'
  }

}
