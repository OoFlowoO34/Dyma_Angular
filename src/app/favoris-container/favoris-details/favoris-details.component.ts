// Importation des dépendances nécessaires
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favoris-details',
  templateUrl: './favoris-details.component.html',
  styleUrls: ['./favoris-details.component.scss'],
})
export class FavorisDetailsComponent {
  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  // Déclaration d'une propriété publique 'cocktail' de type Cocktail
  @Input() public cocktail?: Cocktail;

  // Déclaration d'une propriété publique 'subscription' de type Subscription
  public subscription: Subscription;

  // Le hook ngOnInit est exécuté après la création du composant
  ngOnInit(): void {
    // On souscrit à l'observable paramMap de l'objet activatedRoute
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // Avant de souscrire à un nouvel observable, on vérifie s'il y en avait déjà un actif
      // Si oui, on se désabonne pour éviter les fuites de mémoire
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      // On appelle la méthode getCocktail() du service cocktailService
      // +paramMap.get('index')! : convertit l'index récupéré dans l'URL en nombre (l'exclamation en fin indique que nous sommes sûrs que la valeur ne sera pas nulle)
      // getCocktail() retourne un observable qui émettra un objet de type Cocktail
      // Lorsque le résultat est émis, on met à jour la propriété 'cocktail' avec la valeur du cocktail récupérée
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index')!)
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }
}
