import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablonuListComponent } from './sablonu-list.component';

describe('SablonuListComponent', () => {
  let component: SablonuListComponent;
  let fixture: ComponentFixture<SablonuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablonuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablonuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
