import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seite2 } from './seite2';

describe('Seite2', () => {
  let component: Seite2;
  let fixture: ComponentFixture<Seite2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seite2],
    }).compileComponents();

    fixture = TestBed.createComponent(Seite2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
