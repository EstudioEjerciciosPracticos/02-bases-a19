import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  styleUrl: './dragonball-character-add.component.css'
})
export class DragonballCharacterAddComponent {
name= signal('')
power = signal(0)

newCharacter= output<Character>()

addCharacter() {

    if( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

    // this.characters().push(newCharacter);
    // this.characters.set([...this.characters(), newCharacter]);
    // this.characters.update( list => [...list, newCharacter] );

    this.newCharacter.emit(newCharacter);

    this.resetField();

  }

  resetField(){
    this.name.set('');
    this.power.set(0);
  }

}
