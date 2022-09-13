import axios from 'axios';

async function getStarredRepositories() {
  const url = '/repositories/starred';

  const githubRespositories = await axios.get(url);
  return githubRespositories.data;
}

async function getRepositoryLanguages(repositoryName: string): Promise<any> {
  const url = `/repositories/languages/${repositoryName}`;

  const repositoryLanguages = await axios.get(url);
  return repositoryLanguages.data;
}

export const GithubService = {
  getStarredRepositories,
  getRepositoryLanguages
};