import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasthometileComponent } from './casthometile.component';

describe('CasthometileComponent', () => {
  let component: CasthometileComponent;
  let fixture: ComponentFixture<CasthometileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasthometileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasthometileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
