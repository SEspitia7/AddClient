import { TestBed } from '@angular/core/testing';
import { ClientServiceService } from './client-service.service';

/* This is a test that checks if the service is created. */
describe('ClientSericeService', () => {
  let service: ClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientServiceService);
  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
