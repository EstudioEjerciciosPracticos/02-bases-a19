import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-page',
  imports: [CommonModule],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  name= signal('');
  power= signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 4, name: 'Yancha', power: 500 }
  ]);

  powerClasses = computed(() => {
    return{
      'text-danger': true
    }
  })

  addCharacter() {

    if( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    // this.characters().push(newCharacter);
    // this.characters.set([...this.characters(), newCharacter]);
    this.characters.update( list => [...list, newCharacter] );

    this.resetField();

  }

  resetField(){
    this.name.set('');
    this.power.set(0);
  }


}
