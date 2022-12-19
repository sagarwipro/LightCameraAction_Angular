import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCastToMovieComponent } from './add-cast-to-movie.component';

describe('AddCastToMovieComponent', () => {
  let component: AddCastToMovieComponent;
  let fixture: ComponentFixture<AddCastToMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCastToMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCastToMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
