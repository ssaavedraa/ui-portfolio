import axios from 'axios';
import { GithubRepository } from './DTOS/GithubRepository';


function getStarredRepositories() {
  const url = 'https://api.github.com/users/ssaavedraa/starred';

  return axios.get(url)
    .then(response => response.data)
    .then((repositories: GithubRepository[]) => {
      return repositories.map((repository: any): GithubRepository => {
        return {
          id: repository.id,
          name: repository.name,
          language: repository.language,
          url: repository.html_url,
          sshClone: repository.ssh_url,
          htmlClone: repository.clone_url,
        };
      });
    });
}

export const GithubService = {
  getStarredRepositories
};