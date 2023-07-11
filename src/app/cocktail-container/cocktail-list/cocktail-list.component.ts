import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: Cocktail[];
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  public selectCocktail(index: number): void {
    console.log('selected cocktail:' + index);
    this.changeCocktail.emit(index);
  }
}
