import { createTheme } from "@mui/material/styles";

export default function addComponents(theme) {
	return createTheme(theme, {
		components: {
			MuiIconButton: {
				variants: [
					{
						props: { variant: "navigation" },
						style: {
							border: "1px solid",
							borderRadius: theme.shape.borderRadius,
						},
					},
				],
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: theme.palette.background.navBar,
					},
				},
			},
			MuiButton: {
				variants: [
					{
						props: { variant: "navBar" },
						style: {
							backgroundColor: theme.palette.background.navBar,
						},
					},
					{
						props: { variant: "importantAction" },
						style: {
							backgroundColor: theme.palette.secondary.main,
							color: theme.palette.text.dark,
						},
					},
				],
				styleOverrides: {
					root: {
						padding: "12px 12px",
						color: theme.palette.text.primary,
						"&:hover": {
							backgroundColor: theme.palette.action.hover,
						},
					},
				},
			},
		},
	});
}

/* 
light mode, components must have a dark color with a light background
darkmode, light color with a dark background 
*/
