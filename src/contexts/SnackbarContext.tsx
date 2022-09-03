import React, { createContext, useState } from 'react';
import { SnackbarContextInterface, SnackbarProps } from '../types/Snackbar/snackbar';
import { SnackbarStatus } from '../types/Snackbar/snackbarEnum';

export const SnackbarContext = createContext<SnackbarContextInterface | null>(null);

const snackbarInitialState: SnackbarProps ={
  message: '',
  status: SnackbarStatus.Loading,
  showSnackbar: false
};

export default function SnackbarProvider(props:{ children: any }) {

  const [snackbarProps, setSnackbarProps] = useState(snackbarInitialState);

  return (
    <SnackbarContext.Provider
      value={
        {
          snackbarProps,
          setSnackbarProps
        }
      }
    >
      { props.children }
    </SnackbarContext.Provider>
  );
}
