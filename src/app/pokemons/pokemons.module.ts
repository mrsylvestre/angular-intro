import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonsComponent } from './list/list-pokemons.component';
import { DetailPokemonComponent } from './details/details-pokemon.component';
import { CardBorderDirective } from './card-border.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemon.service';
import { PokemonFormComponent } from './form/pokemon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit/edit-pokemons.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoaderComponent } from '../shared/components/loader.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { LoginRoutingModule } from '../login-routing.module';
import { LoginComponent } from '../login.component';
@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonRoutingModule,
    LoginRoutingModule
  ],
  declarations: [
    ListPokemonsComponent,
    DetailPokemonComponent,
    CardBorderDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchBarComponent,
    LoaderComponent,
    LoginComponent
  ],
  // Providers are the services to use with components attached
  providers: [PokemonsService, AuthGuard, AuthService]
})
export class PokemonsModule {}
