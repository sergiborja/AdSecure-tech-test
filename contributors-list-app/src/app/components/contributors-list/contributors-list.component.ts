import { repoContributors } from './../../utils/interfaces';
import { GetContributorsListService } from './../../services/list-contributors';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.sass'],
})
export class ContributorsListComponent implements OnInit {
  repository: string;
  owner: string;
  contributorsList: Array<repoContributors>;
  feedback: string;

  constructor(
    public router: Router,
    private getContributorsListService: GetContributorsListService
  ) {}

  ngOnInit(): void {
    let [, splitedUrl] = this.router.url.split('/contributors/repo:');
    [this.repository, this.owner] = splitedUrl.split(`/owner:`);
    try {
      this.getContributorsListService
        .getContributorsList(this.repository, this.owner)
        .then((res) => {
          if (res.error) {
            this.feedback = res.error.message;
          } else {
            this.contributorsList = res;
          }
        });
    } catch (error) {
      if (error) console.log(error);
    }
  }
}
