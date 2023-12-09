export const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number = 0) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
