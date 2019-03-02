import { Injectable } from '@angular/core';
import { Pokemon } from './shared/interface/pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {
  // Retourne tous les pokémons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();
    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }

  getPokemonTypes(): Array<string> {
    let pokemons = this.getPokemons();
    let types: string[] = [];
    for (let index = 0; index < pokemons.length; index++) {
      pokemons[index].types.forEach(element => {
        if (types.indexOf(element) === -1) {
          types.push(element);
        }
      });
    }
    return types;
  }
}
