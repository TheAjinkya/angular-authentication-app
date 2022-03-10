import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedSidebarComponent } from './updated-sidebar.component';

describe('UpdatedSidebarComponent', () => {
  let component: UpdatedSidebarComponent;
  let fixture: ComponentFixture<UpdatedSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
