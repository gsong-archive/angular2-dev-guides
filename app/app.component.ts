import {Component} from 'angular2/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>Little Tour of Heroes</h1>

  <input #newHero
    (keyup.enter)="acceptInput(addHero, newHero)"
    (blur)="acceptInput(addHero, newHero)">
  <button (click)="acceptInput(addHero, newHero)">Add</button>

  <ul>
    <li *ngFor="#hero of heroes">{{ hero }}</li>
  </ul>
  `
})
export class AppComponent {
  heroes = new Set(['Windstorm', 'Bombasto', 'Magneta', 'Tornado']);

  acceptInput = (callback: (v: string) => void, input: HTMLInputElement) => {
    callback(input.value);
    input.value = '';
  };

  addHero = (hero: string) => {
    if (hero) {
      this.heroes = new Set([...Array.from(this.heroes.values()), hero]);
    }
  };
};