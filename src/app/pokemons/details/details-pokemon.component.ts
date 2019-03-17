import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../shared/interface/pokemon';
import { PokemonsService } from '../pokemon.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './app/pokemons/details/details-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
      .subscribe(pokemon => {this.pokemon = pokemon});
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

  goEdit(pokemon: Pokemon): void {
    this.router.navigate(['/pokemons/edit', pokemon.id]);
  }
}
