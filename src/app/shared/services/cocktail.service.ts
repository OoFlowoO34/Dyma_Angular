import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      map((cocktails: Cocktail[]) => {
        return cocktails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .post<Cocktail>('https://restapi.fr/api/cocktails34f', cocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next([...value, savedCocktail]);
        })
      );
    // const value = this.cocktails$.value;
    // this.cocktails$.next([...value, cocktail]);
  }

  public addThreeCocktails() {
    this.seed();
  }

  public deleteAllCocktails(): Observable<void> {
    return this.http.delete<void>('https://restapi.fr/api/cocktails34f').pipe(
      tap(() => {
        this.cocktails$.next([]);
      })
    );
  }

  public editCocktail(
    cocktailId: string,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(
        `https://restapi.fr/api/cocktails34f/${cocktailId}`,
        editedCocktail
      )
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next(
            value.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) {
                return savedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
    // const value = this.cocktails$.value;
    // this.cocktails$.next(
    //   value.map((cocktail: Cocktail) => {
    //     if (cocktail.name === editedCocktail.name) {
    //       return editedCocktail;
    //     } else {
    //       return cocktail;
    //     }
    //   })
    // );
  }

  public fecthCocktail(): Observable<Cocktail[]> {
    return this.http.get('https://restapi.fr/api/cocktails34f').pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }

  constructor(private http: HttpClient) {
    // this.seed();
  }

  public seed() {
    this.http
      .post('https://restapi.fr/api/cocktails34f', {
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
      })
      .subscribe();

    this.http
      .post('https://restapi.fr/api/cocktails34f', {
        name: 'Cuba libre',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Cuba_Libre_00.jpg',
        description:
          'Selon la légende, cette appellation viendrait d un soldat américain qui, commandant ce cocktail, porta un toast « Por Cuba libre ! » (Pour Cuba libre ! en espagnol) qui était le leitmotiv des troupes américaines durant la guerre.',
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
      })
      .subscribe();

    this.http
      .post('https://restapi.fr/api/cocktails34f', {
        name: 'Gin tonic',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Gin_and_Tonic.jpg/220px-Gin_and_Tonic.jpg',
        description:
          'Le gin tonic est un cocktail alcoolisé à base de gin et d eau tonique, parfois accompagné d’une tranche de citron, de citron vert ou de concombre, et servi avec de la glace.',
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
      })
      .subscribe();
  }
}
