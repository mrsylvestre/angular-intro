import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';
import { Pokemon } from '../shared/interface/pokemon';

@Component({
  selector: 'list-pokemons',
  templateUrl: './app/pokemons/list/list-pokemons.component.html'
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
