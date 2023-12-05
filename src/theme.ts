import { createTheme } from '@mui/material';

interface Colors {
	darkGray: string;
	softGray: string;
}

declare module '@mui/material/styles' {
	interface Palette {
		otherColor?: Colors;
	}
	interface PaletteOptions {
		otherColor?: Colors;
	}
}

export const theme = createTheme({
	palette: {
		otherColor: {
			darkGray: '#13171D',
			softGray: '#E2E2E2',
		},
	},
});
