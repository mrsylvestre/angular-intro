import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonsComponent } from './list/list-pokemons.component';
import { DetailPokemonComponent } from './details/details-pokemon.component';
import { CardBorderDirective } from './card-border.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemon.service';
import { PokemonFormComponent } from './form/pokemon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit/edit-pokemons.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from '../shared/components/loader.component';
@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonRoutingModule
  ],
  declarations: [
    ListPokemonsComponent,
    DetailPokemonComponent,
    CardBorderDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchBarComponent,
    LoaderComponent
  ],
  // Providers are the services to use with components attached
  providers: [PokemonsService]
})
export class PokemonsModule {}
