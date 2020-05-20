import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	content: {
		padding: 0
	},
	buttonIcon: {
		marginRight: theme.spacing(1)
	}
}));

export default function InfoCard({ title, children, renderActions, className, ...rest }) {
	const classes = useStyles();

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardHeader title={title} />
			<Divider />
			<CardContent className={classes.content}>{children}</CardContent>
			{renderActions}
		</Card>
	);
}
