import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCreate } from './load-create';

describe('LoadCreate', () => {
  let component: LoadCreate;
  let fixture: ComponentFixture<LoadCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
