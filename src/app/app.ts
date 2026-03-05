import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Game } from './components/game/game';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Home, Header, Footer, Game],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('iprih');
}
