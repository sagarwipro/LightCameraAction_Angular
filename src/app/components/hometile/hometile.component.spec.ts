import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometileComponent } from './hometile.component';

describe('HometileComponent', () => {
  let component: HometileComponent;
  let fixture: ComponentFixture<HometileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
