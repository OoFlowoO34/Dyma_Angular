import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
    },
    {
      name: 'Cuba libre',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
    },
    {
      name: 'Gin tonic',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
    },
  ];
}
