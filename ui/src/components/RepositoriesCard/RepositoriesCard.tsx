import React from 'react';
import { MdHttp, MdOutlineHttps, MdOpenInNew } from 'react-icons/md';

import { GithubRepository } from '../../services/DTOS/GithubRepository';

import './RepositoriesCard.scss';

export default function RepositoriesCard(props: {repository: GithubRepository}){
  return (
    <div className='card'>
      <h2>{props.repository.name}</h2>
      <h3>Language: {props.repository.language}</h3>
      <div className="cardard__buttons">
        <a className='btn--icon' href={props.repository.url} title='Go to repository' target='_blank' rel="noreferrer">
          <MdOpenInNew/>
        </a>
        <span className='btn--icon' title='Clone using SSH'>
          <MdOutlineHttps/>
        </span>
        <span className='btn--icon' title='Clone using HTTPS'>
          <MdHttp/>
        </span>
      </div>
    </div>
  );
}
