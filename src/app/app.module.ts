import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './404.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  /*
  The modules import order is important.
  We need the PokemonsModule Routes to be called
  before the default AppRoutingModule
  */
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard, Title]
})
export class AppModule { }
