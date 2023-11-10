import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  pokemonList = [
    { name: 'Pikachu', type: './assets/Electric.png', imageUrl: './assets/Pikachu.png', power: 74, damage: 76, attacks: 'Thunder bolt', health: 74, friendly: 78, color1: 'yellow'},
    { name: 'Rattata', type: './assets/Normal.png', imageUrl: './assets/Rattata.png', power: 74, damage: 76, attacks: 'Drain', health: 74, friendly: 78, color: 'grey'}
  ];
}
