import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404.component';

// The principal router calls the main routes from the app.
// Then the submodules Routers (like: ./pokemons/pokemons-routing.module.ts)
// will take on themselves the rest of the routes of the app
const appRoutes: Routes = [
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