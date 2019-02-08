import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons.component';
import { DetailPokemonComponent } from './details-pokemon.component';
import { PageNotFoundComponent } from './404.component';

// routes
const appRoutes: Routes = [
	{ path: 'pokemons', component: ListPokemonsComponent },
	{ path: 'pokemons/:id', component: DetailPokemonComponent },
	{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }