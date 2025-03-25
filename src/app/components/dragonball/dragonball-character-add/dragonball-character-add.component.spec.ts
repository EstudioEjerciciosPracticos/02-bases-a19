import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballCharacterAddComponent } from './dragonball-character-add.component';

describe('DragonballCharacterAddComponent', () => {
  let component: DragonballCharacterAddComponent;
  let fixture: ComponentFixture<DragonballCharacterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballCharacterAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballCharacterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
