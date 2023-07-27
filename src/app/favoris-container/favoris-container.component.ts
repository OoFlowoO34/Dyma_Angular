import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favoris-container',
  templateUrl: './favoris-container.component.html',
  styleUrls: ['./favoris-container.component.scss'],
})
export class FavorisContainerComponent implements OnInit {
  constructor(private cocktailService: CocktailService) {}

  public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$;

  ngOnInit() {}
}
