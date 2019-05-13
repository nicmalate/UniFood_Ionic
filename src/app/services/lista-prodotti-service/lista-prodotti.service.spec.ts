import { TestBed } from '@angular/core/testing';

import { ListaProdottiService } from './lista-prodotti.service';

describe('ListaProdottiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaProdottiService = TestBed.get(ListaProdottiService);
    expect(service).toBeTruthy();
  });
});
