import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedNavbarComponent } from './updated-navbar.component';

describe('UpdatedNavbarComponent', () => {
  let component: UpdatedNavbarComponent;
  let fixture: ComponentFixture<UpdatedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
