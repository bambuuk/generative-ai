import { useState, SyntheticEvent } from "react";

const useSnackbarControl = () => {
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const openSnackbar = () => {
    setIsOpenSnackbar(true);
  };

  const closeSnackbar = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpenSnackbar(false);
  };
  return { isOpenSnackbar, openSnackbar, closeSnackbar };
};

export default useSnackbarControl;
