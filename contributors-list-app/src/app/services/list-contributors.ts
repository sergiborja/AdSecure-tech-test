import { repoContributors } from './../utils/interfaces';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class GetContributorsListService {
  constructor(private http: HttpClient) {}

  public async getContributorsList(
    repository: string,
    owner: string
  ): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `application/vnd.github.v3+json`,
      }),
    };
    return this.http
      .get(
        `${environment.githubApiUrl}repos/${owner}/${repository}/contributors`,
        httpOptions
      )
      .toPromise()
      .then((res: any) => {
        if (res.error) return res.error.message;
        else return res;
      })
      .catch(({ error }) => {
        return { error: error };
      });
  }
}
