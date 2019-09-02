import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404.component';
import { LoginComponent } from './login.component';

// The principal router calls the main routes from the app.
// Then the submodules Routers (like: ./pokemons/pokemons-routing.module.ts)
// will take on themselves the rest of the routes of the app
const appRoutes: Routes = [
  { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' }, // Any empty path
  { path: '**', component: PageNotFoundComponent } // Any route not catched by paths (404)
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
