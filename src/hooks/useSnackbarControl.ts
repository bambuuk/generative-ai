import { useState, SyntheticEvent } from 'react';

const useSnackbarControl = () => {
	const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
	const [actionType, setActionType] = useState('');

	const openSnackbar = (type: string) => {
		setIsOpenSnackbar(true);
		setActionType(type);
	};

	const closeSnackbar = (_event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsOpenSnackbar(false);
	};
	return { isOpenSnackbar, openSnackbar, closeSnackbar, actionType };
};

export default useSnackbarControl;
