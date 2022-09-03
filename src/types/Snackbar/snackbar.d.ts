export interface SnackbarContextInterface {
  snackbarProps: SnackbarProps
  setSnackbarProps: Dispatch<SnackbarProps>
}

export interface SnackbarProps {
  message: string
  status: SnackbarStatus
  showSnackbar: boolean
}
