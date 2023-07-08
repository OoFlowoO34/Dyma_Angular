import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { HeaderComponent } from './header/header.component';

import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveauComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
