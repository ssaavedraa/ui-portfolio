import React, { useContext } from 'react';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import './Snackbar.scss';

export default function Snackbar() {

  const snackbarContext = useContext(SnackbarContext);

  if(snackbarContext?.snackbarProps.showSnackbar){
    return (
      <div className='snackbar'>
        <h4 className='snackbar__message'>{snackbarContext.snackbarProps.message}</h4>
        <div className={`snackbar__loader--${snackbarContext.snackbarProps.status}`}></div>
      </div>
    );
  } else {
    return null;
  }

}
