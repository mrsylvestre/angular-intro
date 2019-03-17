import { Injectable } from '@angular/core';
import { Pokemon } from './shared/interface/pokemon';
import { POKEMONS } from './mock-pokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) {}

  private pokemonUrl = 'api/pokemons';

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation ='op', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> { // Typing means: *Observable emitting an array of Pokemon*
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe( // We type this.http.get() with <> before round braces ()
      tap(_ => this.log('PokemonsService - fetched all pokemons')),
      catchError(this.handleError('Error getPokemons()', []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`PokemonsService - fetched pokemon ID: ${id}`)),
      catchError(this.handleError<Pokemon>(`Error getPokemon() with ID:${id}`))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOpt = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    }
    return this.http.put(this.pokemonUrl, pokemon, httpOpt).pipe(
      tap(_ => this.log(`PokemonsService - updated pokemon ID:${pokemon.id}`)),
      catchError(this.handleError<any>(`Error updatePokemon() with ID:${pokemon.id}`))
    )
  }

  getPokemonTypes(): Array<string> {
    let types: string[] = [];

    this.getPokemons().subscribe(pokemons => {
      for (let index = 0; index < pokemons.length; index++) {
        pokemons[index].types.forEach(element => {
          if (types.indexOf(element) === -1) {
            types.push(element);
          }
        });
      }
    });
    return types;
  }
}
