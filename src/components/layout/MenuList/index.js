import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { List, Typography, makeStyles } from '@material-ui/core';
import NavigationListItem from '../NavigationItem';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(3)
	}
}));

export default function Navigation({ title, pages, className, ...rest }) {
	const classes = useStyles();
	const location = useLocation();
	return (
		<div {...rest} className={classes.root}>
			{title && <Typography variant="overline">{title}</Typography>}
			<NavigationList depth={0} pages={pages} location={location} />
		</div>
	);
}

const NavigationList = ({ pages, ...rest }) => {
	return <List>{pages.reduce((items, page) => reduceChildRoutes({ items, page, ...rest }), [])}</List>;
};

const reduceChildRoutes = ({ items, page, depth, location }) => {
	if (page.children) {
		const open = matchPath(location.pathname, {
			path: page.href,
			exact: false
		});

		items.push(
			<NavigationListItem
				depth={depth}
				icon={page.icon}
				key={page.title}
				label={page.label}
				open={!!open}
				title={page.title}
			>
				<NavigationList depth={depth + 1} pages={page.children} location={location} />
			</NavigationListItem>
		);
	} else {
		items.push(
			<NavigationListItem
				depth={depth}
				href={page.href}
				icon={page.icon}
				key={page.title}
				label={page.label}
				title={page.title}
			/>
		);
	}

	return items;
};
