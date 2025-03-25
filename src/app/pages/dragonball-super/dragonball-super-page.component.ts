import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interfaces';
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

    public dragonbollServices = inject(DragonballService);

    
}
