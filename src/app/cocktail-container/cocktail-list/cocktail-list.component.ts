import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails?: Cocktail[];
  public search = '';

  constructor(
    private cocktailService: CocktailService,
  ) {}

  public deleteAllCocktails(): void {
    if (this.cocktails) {
      this.cocktailService.deleteAllCocktails().subscribe();
    }
  }

  public addThreeCocktails() {
    this.cocktailService.addThreeCocktails();
  }

  ngOnInit(): void {
    console.log(this.cocktails);
  }
}
