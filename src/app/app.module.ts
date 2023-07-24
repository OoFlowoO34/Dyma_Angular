// modules
import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

//pipes

// routes

import { APP_ROUTES } from './app.routes';
import { ExercicesContainerComponent } from './exercices-container/exercices-container.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    ExercicesContainerComponent,
    CocktailFormComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
