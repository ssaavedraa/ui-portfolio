import React, { SyntheticEvent } from 'react';
import { MdHttp, MdOutlineHttps, MdOpenInNew } from 'react-icons/md';

import { GithubRepository } from '../../services/DTOS/GithubRepository';

import './RepositoriesCard.scss';

export default function RepositoriesCard(props: {repository: GithubRepository}){
  const copyText = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    navigator.clipboard.writeText(target.value);
  };

  return (
    <div className='card'>
      <h2>{props.repository.name}</h2>
      <h3>Languages: </h3>
      <div className="card__buttons">
        <a className='btn btn--icon' href={props.repository.url} title='Go to repository' target='_blank' rel="noreferrer">
          <MdOpenInNew/>
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