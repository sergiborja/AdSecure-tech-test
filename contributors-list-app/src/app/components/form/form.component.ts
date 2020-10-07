import { repositoryItems } from './../../utils/interfaces';
import { SearchReposService } from './../../services/search-repos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  changeView: boolean = false;
  listOfContributors: Array<string>;
  repository: string;
  luckyRepo: string;
  owner: string;
  reposFound: Array<repositoryItems>;
  feedback: string;

  ngOnInit(): void {}

  constructor(
    public router: Router,
    private searchReposService: SearchReposService
  ) {}

  searchRepositories() {
    if (this.repository) {
      this.feedback = undefined;
      this.changeView = true;
      try {
        this.searchReposService
          .getReposList(this.repository)
          .then((repositoryItems: Array<repositoryItems>) => {
            this.reposFound = repositoryItems;
          })
          .catch(() => {
            throw new Error('There has been an error finding this repository');
          });
      } catch (error) {
        if (error) throw new Error('There has been a problem');
      }
    } else {
      this.feedback = 'Please introduce a valid repository name';
    }
  }
}
