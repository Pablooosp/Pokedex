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
    { name: 'Bulbasaur', type: 'Grass/Poison', imageUrl: 'URL_TO_BULBASAUR_IMAGE' },
    { name: 'Charmander', type: 'Fire', imageUrl: 'URL_TO_CHARMANDER_IMAGE' },
    { name: 'Squirtle', type: 'Water', imageUrl: 'URL_TO_SQUIRTLE_IMAGE' }
  ];
}
