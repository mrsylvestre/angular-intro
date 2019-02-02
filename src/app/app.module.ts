import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardBorderDirective } from './card-border.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CardBorderDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
