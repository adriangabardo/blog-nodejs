import { TestBed } from '@angular/core/testing';

import { ServicoPostsService } from './servico-posts.service';

describe('ServicoPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoPostsService = TestBed.get(ServicoPostsService);
    expect(service).toBeTruthy();
  });
});
