import { SearchReposService } from './search-repos.service';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('SearchReposService', () => {
  let service: SearchReposService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchReposService);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchReposService, HttpClient],
    });
    service = TestBed.get(SearchReposService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should succed on retrieving a list of contributors of a gihub repository', () => {
    let repository: string = 'skylab-bootcamp-202004';

    service.getReposList(repository).then((body) => {
      expect(body).toBeTruthy();
      expect(body.length).toBe(30);
      expect(body[0].owner).toBe('manuelbarzi');
    });
    expect(service).toBeTruthy();

    const request = httpMock.expectOne(
      `${environment.githubApiUrl}search/repositories?q=${repository}`
    );

    expect(request.request.method).toBe('GET');

    request.flush({ repository });
  });
});
