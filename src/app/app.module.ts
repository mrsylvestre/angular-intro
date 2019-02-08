import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardBorderDirective } from './card-border.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonsComponent } from './list-pokemons.component';
import { DetailPokemonComponent } from './details-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './404.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CardBorderDirective,
    PokemonTypeColorPipe,
    ListPokemonsComponent,
    DetailPokemonComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
