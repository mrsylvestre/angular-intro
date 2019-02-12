import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonsComponent } from './list/list-pokemons.component';
import { DetailPokemonComponent } from './details/details-pokemon.component';
import { CardBorderDirective } from './card-border.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';

@NgModule({
	imports: [
		CommonModule, // default module class that you need to inherit in components attached
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonsComponent,
		DetailPokemonComponent,
		CardBorderDirective,
		PokemonTypeColorPipe
	],
	providers: [] // Providers are the services to use with components attached
})
export class PokemonsModule { }