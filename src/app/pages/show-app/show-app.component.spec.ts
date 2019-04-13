import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppComponent } from './show-app.component';

describe('ShowAppComponent', () => {
  let component: ShowAppComponent;
  let fixture: ComponentFixture<ShowAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
