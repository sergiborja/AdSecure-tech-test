import { repository } from './../utils/interfaces';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SearchReposService {
  constructor(private http: HttpClient) {}

  public async getReposList(repository: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `application/vnd.github.v3+json`,
      }),
    };
    return this.http
      .get(
        `${environment.githubApiUrl}search/repositories?q=${repository}`,
        httpOptions
      )
      .toPromise()
      .then((allRepositoryInfo: repository) => {
        return allRepositoryInfo.items;
      })
      .catch(({ error }) => {
        return { error: error };
      });
  }
}
