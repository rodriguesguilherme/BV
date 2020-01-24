import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPokemonComponent } from './cadastro-pokemon/cadastro-pokemon.component';
import { MeusPokemonsComponent } from './meus-pokemons/meus-pokemons.component';
import { DialogComponent } from './shared/dialog/dialog.component';


const routes: Routes = [
  { path: 'cadastrar-pokemon', component: CadastroPokemonComponent },
  { path: 'meus-pokemons', component: MeusPokemonsComponent },
  { path: 'dialog', component: DialogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
