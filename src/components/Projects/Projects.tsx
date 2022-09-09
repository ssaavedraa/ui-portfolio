import React, { useEffect, useState } from 'react';
import { GithubRepository } from '../../services/DTOS/GithubRepository';
import { GithubService } from '../../services/GithubService';
import RepositoriesCard from '../RepositoriesCard/RepositoriesCard';
import './Projects.scss';

export default function Projects() {
  const [githubRepositories, setGithubRepositories] = useState([] as GithubRepository[]);

  useEffect(() => {
    GithubService.getStarredRepositories()
      .then((repositories: any): void => {
        console.debug(repositories);
        setGithubRepositories(repositories);
      });
  }, []);

  return (
    <div className='repositories__container'>
      <h1 className='repositories__title'>
          Personal projects
      </h1>
      {
        githubRepositories.map((repository: GithubRepository) => {
          return(
            <RepositoriesCard key={repository.id} repository={repository}/>
          );
        })
      }
    </div>
  );
}
