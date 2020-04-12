import { TestBed, inject } from '@angular/core/testing';

import { ApproutingguardService } from './approutingguard.service';

describe('ApproutingguardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApproutingguardService]
        });
    });

    it('should be created', inject([ApproutingguardService], (service: ApproutingguardService) => {
        expect(service).toBeTruthy();
    }));
});
