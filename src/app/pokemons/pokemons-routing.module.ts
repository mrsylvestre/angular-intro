import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './details/details-pokemon.component';
import { ListPokemonsComponent } from './list/list-pokemons.component';
import { EditPokemonComponent } from './edit/edit-pokemons.component';
import { AuthGuard } from '../auth-guard.service';

// Pokemons module route's
const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuard],
    children: [
      { path: 'all', component: ListPokemonsComponent },
      { path: 'edit/:id', component: EditPokemonComponent },
      { path: ':id', component: DetailPokemonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
