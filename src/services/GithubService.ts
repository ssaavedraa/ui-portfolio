import axios from 'axios';

async function getStarredRepositories() {
  const url = '/api/repositories/get-starred';

  const githubRespositories = await axios.get(url);
  return githubRespositories.data;
}

export const GithubService = {
  getStarredRepositories
};