import React, { SyntheticEvent } from 'react';
import { MdHttp, MdOutlineHttps } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { GithubRepository } from '../../services/DTOS/GithubRepository';
import RepositoryLanguages from './RepositoryLanguages/RepositoryLanguages';

import './RepositoryCard.scss';

export default function RepositoryCard(props: {repository: GithubRepository}){
  const copyText = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    navigator.clipboard.writeText(target.value);
  };

  return (
    <div className='card'>
      <h2>{props.repository.name}</h2>
      <RepositoryLanguages repositoryName={props.repository.name}/>

      <div className="card__buttons">
        <a className='btn btn--icon' href={props.repository.url} title='Go to repository' target='_blank' rel="noreferrer">
          <FiGithub/>
        </a>

        <button className='btn btn--icon' title='Clone using SSH' value={props.repository.sshClone} onClick={copyText}>
          <MdOutlineHttps/>
        </button>

        <button className='btn btn--icon' title='Clone using HTTPS' value={props.repository.htmlClone} onClick={copyText}>
          <MdHttp/>
        </button>
      </div>
    </div>
  );
}