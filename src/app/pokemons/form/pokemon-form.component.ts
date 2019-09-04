import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemon.service';
import { Pokemon } from '../shared/interface/pokemon';

@Component({
  selector: 'pokemon-form',
  templateUrl: './app/pokemons/form/pokemon-form.component.html',
  styleUrls: ['./app/pokemons/form/pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon; // propriété d'entrée du composant
  pokemons: Array<Pokemon>;
  types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
    // Initialisation de la propriété types
    this.types = this.pokemonsService.getPokemonTypes();
  }

  getPokemons(): void {
    this.pokemonsService
      .getPokemons()
      .subscribe(pokemons => (this.pokemons = pokemons));
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (~index) return true;
    return false;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (~index) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  // Valide le nombre de types pour chaque pokémon
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  goBack(): void {
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    this.pokemonsService
      .updatePokemon(this.pokemon)
      .subscribe(() => this.goBack());
  }
}
