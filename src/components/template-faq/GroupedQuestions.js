import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MyAccordion from "../MyAccordion";
import { ScaleWhenHover } from "../MyComponents/Animations";

export default function Section(props) {
	const array_articles = props.content.components[0].componentBlocks;
	const list_articles = array_articles.map((article) => {
		return (
			<ScaleWhenHover key={article.id}>
				<MyAccordion title={article.title} description={article.description} />
			</ScaleWhenHover>
		);
	});

	return (
		<Stack component="section" spacing={2} sx={sx_container} mb={4}>
			<Typography variant="h3" children={props.content.title} />
			<Stack spacing={2}>{list_articles}</Stack>
		</Stack>
	);
}

const sx_container = {
	flexDirection: { xs: "column", md: "row" },
	justifyContent: { xs: "flex-start", md: "space-between" },
	alignItems: "center",
	maxWidth: 1100,
};
