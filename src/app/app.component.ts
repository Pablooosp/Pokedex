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
    { name: 'Pikachu', type: './assets/Electric.png', imageUrl: './assets/Pikachu.png', power: 74, damage: 76, attacks: 'Thunder bolt', altura: 0.4, peso: 6.0, color1: 'yellow'},
    { name: 'Rattata', type: './assets/Normal.png', imageUrl: './assets/Rattata.png', power: 74, damage: 76, attacks: 'Drain', altura: 0.3, peso: 3.5, color: 'grey'},
    {name: 'Growlithe', type: './assets/Fire.png', imageUrl: './assets/Growlithe.png', power: 74, damage: 76, attacks: 'Flash fire', altura: 0.7, peso: 19.0, color: 'red'},
    {name: 'Horsea', type: './assets/Water.png', imageUrl: './assets/Horsea.png', power: 74, damage: 76, attacks: 'Sniper', altura: 0.4, peso: 8.0, color: 'blue'},
    {name: 'Clefairy', type: './assets/Fairy.png', imageUrl: './assets/Clefairy.png', power: 74, damage: 76, attacks: 'Magic wall', altura: 0.6, peso: 7.5, color: 'pink'},
    {name: 'Treecko', type: './assets/Grass.png', imageUrl: './assets/Treecko.png', power: 74, damage: 76, attacks: 'Overgrow', altura: 0.5, peso: 5.0, color: 'green'}
  ];
}
