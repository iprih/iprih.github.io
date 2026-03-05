import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

<div class="box">
  <h2>Priscila — experiments</h2>

  <p>
    Explorando Angular, áudio, interfaces minimalistas e pequenos jogos.
    Este espaço é um laboratório pessoal.
  </p>

  <p>
    Interesses:
    UI experimental • áudio • web • estética dev • micro-games
  </p>

  <hr />

  <section>
    <h3>Projeto atual</h3>
    <p>
      Construindo um site simples com Angular e um jogo inspirado no dino do Chrome.
    </p>
  </section>

  <section style="margin-top:40px">
    <h3>Game area (placeholder)</h3>

    <div class="game-placeholder">
      GAME WILL LIVE HERE
    </div>
  </section>

  <section style="margin-top:40px">
    <h3>Notas</h3>

    <ul>
      <li>testando layout ondulado</li>
      <li>testando tipografia</li>
      <li>testando componentes standalone</li>
      <li>aprendendo Angular novamente</li>
    </ul>
  </section>
</div>

