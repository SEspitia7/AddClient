import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundComponent } from './found.component';

/* This is a test that checks if the component is created. */
describe('FoundComponent', () => {
  let component: FoundComponent;
  let fixture: ComponentFixture<FoundComponent>;

  /* This is a test that checks if the component is created. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* This is a test that checks if the component is created. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
