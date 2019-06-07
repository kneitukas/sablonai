import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablonasComponent } from './sablonas.component';

describe('SablonasComponent', () => {
  let component: SablonasComponent;
  let fixture: ComponentFixture<SablonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
