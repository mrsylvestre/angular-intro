import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../shared/interface/pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'list-pokemons',
  templateUrl: './app/pokemons/list/list-pokemons.component.html'
})
export class ListPokemonsComponent implements OnInit {
  private pageTitle = 'Liste de Pokémons';
  private pokemons: Pokemon[];

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
