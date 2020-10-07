import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GetContributorsListService } from './list-contributors';

describe('SearchReposService', () => {
  let service: GetContributorsListService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContributorsListService);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetContributorsListService, HttpClient],
    });
    service = TestBed.get(GetContributorsListService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should succed on retrieving a list of contributors of a gihub repository', () => {
    let repository: string = 'skylab-bootcamp-202004';
    let owner: string = 'manuelbarzi';

    service.getContributorsList(repository, owner).then((body) => {
      expect(body).toBeTruthy();
      expect(body.length).toBe(22);
      expect(body[0].login).toBe('manuelbarzi');
    });
    expect(service).toBeTruthy();

    const request = httpMock.expectOne(
      `${environment.githubApiUrl}repos/${owner}/${repository}/contributors`
    );

    expect(request.request.method).toBe('GET');

    request.flush({ repository, owner });
  });
});
