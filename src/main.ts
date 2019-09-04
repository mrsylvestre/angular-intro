import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

// test the url to determine whether to enable production mode or not by itself
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
