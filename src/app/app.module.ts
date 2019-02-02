import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardBorderDirective } from './card-border.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CardBorderDirective, PokemonTypeColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
