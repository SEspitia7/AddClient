import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListclientComponent } from './listclient.component';

/* This is a test that checks if the component is created. */
describe('ListclientComponent', () => {
  let component: ListclientComponent;
  let fixture: ComponentFixture<ListclientComponent>;

  /* This is a test that checks if the component is created. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* This is a test that checks if the component is created. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
