import { forwardRef, FC } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ICustomSnackbar {
	isOpenSnackbar: boolean;
	closeSnackbar: () => void;
	message: string;
	horizontalOrientation?: 'right' | 'left';
	verticalOrientation?: 'top' | 'bottom';
	severity?: 'error' | 'warning' | 'info' | 'success';
}

const CustomSnackbar: FC<ICustomSnackbar> = ({
	isOpenSnackbar,
	closeSnackbar,
	message,
	horizontalOrientation = 'right',
	verticalOrientation = 'top',
	severity = 'success',
}) => {
	return (
		<Snackbar
			open={isOpenSnackbar}
			autoHideDuration={4000}
			onClose={closeSnackbar}
			anchorOrigin={{ vertical: `${verticalOrientation}`, horizontal: `${horizontalOrientation}` }}
		>
			<Alert onClose={closeSnackbar} severity={severity} sx={{ width: { xs: '80%', sm: '100%' } }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default CustomSnackbar;
