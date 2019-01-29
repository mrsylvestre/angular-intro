import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  private pageTitle = 'Liste de Pokémons';
  private pokemons: Pokemon[];

  constructor() {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  choosePokemon(pokemon: Pokemon) {
    console.log(`vous avez choisi ${pokemon.name}`);
  }
}
