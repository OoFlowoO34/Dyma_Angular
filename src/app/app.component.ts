import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apptest';
  nombre = 42;
  bool = true;
  obj = {
    cle: 'valeur',
  };
  public square(nbr: number) {
    return nbr * nbr;
  }

  public inputType = 'date';
  constructor() {
    setTimeout(() => {
      this.inputType = 'number';
    }, 3000);
  }

  public changeColor(color: string): void {
    this.color = color;
  }

  public color = 'red';
  public color2 = 'green';
  public color3 = 'red';

  public content = 'Bonjour';

  public displayButton = true;

  public users: Array<{ nom: string }> = [
    {
      nom: 'Paul',
    },
    {
      nom: 'Julie',
    },
    {
      nom: 'Jean',
    },
  ];

  public box;

  //////////////////////////////////
  //        CHAPITRE 3            //
  /////////////////////////////////
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
    description:
      'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
  };
}
