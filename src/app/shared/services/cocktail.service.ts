import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
      ingredients: [
        {
          name: 'Rhum',
          quantity: 1,
        },
        {
          name: 'Perrier',
          quantity: 2,
        },
        {
          name: 'Menthe',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Cuba libre',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
      ingredients: [
        {
          name: 'Rhum',
          quantity: 1,
        },
        {
          name: 'Coca',
          quantity: 2,
        },
        {
          name: 'Citron',
          quantity: 1,
        },
      ],
    },
    {
      name: 'Gin tonic',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
      ingredients: [
        {
          name: 'Gin',
          quantity: 1,
        },
        {
          name: 'Schweppes',
          quantity: 3,
        },
        {
          name: 'Citron vert',
          quantity: 1,
        },
      ],
    },
  ]);

  public getCocktail(index: number) {
    const cocktails = this.cocktails$.value;
    return cocktails[index];
  }
  constructor() {}
}
