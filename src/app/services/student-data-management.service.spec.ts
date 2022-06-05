import { TestBed } from '@angular/core/testing';

import { StudentDataManagementService } from './student-data-management.service';

describe('StudentDataManagementService', () => {
  let service: StudentDataManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDataManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
