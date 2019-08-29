import { Injectable } from '@angular/core';
import { Pokemon } from './shared/interface/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PokemonsService {
  constructor(private http: HttpClient) {}

  private pokemonUrl = 'api/pokemons';
  private httpOpt = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    // Typing means: *Observable emitting an array of Pokemon*
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      // We type this.http.get() with <> before round braces ()
      tap(() => this.log('PokemonsService - fetched all pokemons')),
      catchError(this.handleError('Error getPokemons()', []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(() => this.log(`PokemonsService - fetched pokemon ID: ${id}`)),
      catchError(this.handleError<Pokemon>(`Error getPokemon() with ID:${id}`))
    );
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

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (term.trim() === '') {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
      tap(pokemons =>
        pokemons.length
          ? this.log(`PokemonsService - found pokemons matching "${term}"`)
          : null
      ),
      catchError(this.handleError<Pokemon[]>(`Error searching`, []))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put(this.pokemonUrl, pokemon, this.httpOpt).pipe(
      tap(() => this.log(`PokemonsService - updated pokemon ID:${pokemon.id}`)),
      catchError(
        this.handleError<any>(`Error updatePokemon() with ID:${pokemon.id}`)
      )
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${pokemon.id}`;
    return this.http.delete<Pokemon>(url, this.httpOpt).pipe(
      tap(() =>
        this.log(`PokemonsService - deleted pokemon ID: ${pokemon.id}`)
      ),
      catchError(
        this.handleError<Pokemon>(`Error deletePokemon() with ID:${pokemon.id}`)
      )
    );
  }
}
