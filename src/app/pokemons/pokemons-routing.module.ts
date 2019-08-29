import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './details/details-pokemon.component';
import { ListPokemonsComponent } from './list/list-pokemons.component';
import { EditPokemonComponent } from './edit/edit-pokemons.component';

// Pokemons module route's
const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonsComponent },
  { path: 'pokemons/edit/:id', component: EditPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
