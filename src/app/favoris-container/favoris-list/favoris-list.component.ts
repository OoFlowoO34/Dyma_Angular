import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-favoris-list',
  templateUrl: './favoris-list.component.html',
  styleUrls: ['./favoris-list.component.scss'],
})
export class FavorisListComponent {
  @Input() public cocktails?: Cocktail[];
}
