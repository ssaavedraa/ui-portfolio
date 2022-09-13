import React, { useState, useEffect } from 'react';
import { GithubService } from '../../../services/GithubService';

interface RepositoryLanguages {
  [key:string]: string
}

interface RepositoriesLaguagesProps {
  repositoryName: string
}

export default function RepositoryLanguages({ repositoryName }: RepositoriesLaguagesProps) {
  const [languageKeys, setLanguageKeys] = useState([] as string[]);
  const [languageValues, setLanguageValues] = useState([] as string[]);

  const fetchRepositoryLanguages = () => {
    GithubService.getRepositoryLanguages(repositoryName)
      .then(languages => {
        setLanguageKeys(Object.keys(languages));
        setLanguageValues(Object.values(languages));
      });
  };

  useEffect(() => {
    fetchRepositoryLanguages();

  }, []);

  return (
    <div>
      {
        languageKeys.map((language, index) => <p key={language}>{`${language}: ${languageValues[index]}%`}</p>)
      }
    </div>
  );
}
