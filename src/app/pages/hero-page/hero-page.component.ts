import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [ UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name =signal('Batman');
  age = signal(45);

  heroDescription = computed(() => `${ this.name() } - ${ this.age() }`)

  capitalizeName = computed(() => this.name().toUpperCase());

  getHeroDescription(): String{
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Batman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(30);
  }
}
