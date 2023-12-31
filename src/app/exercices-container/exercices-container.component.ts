import { Component } from '@angular/core';

@Component({
  selector: 'app-exercices-container',
  templateUrl: './exercices-container.component.html',
  styleUrls: ['./exercices-container.component.scss'],
})
export class ExercicesContainerComponent {
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
}
