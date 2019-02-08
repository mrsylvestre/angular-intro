import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemons',
  templateUrl: './app/list-pokemons.component.html'
})
export class ListPokemonsComponent implements OnInit {
  private pageTitle = 'Liste de Pokémons';
  private pokemons: Pokemon[];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
