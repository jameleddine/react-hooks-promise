import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider, Paper, Avatar, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import clsx from 'clsx';
import MenuList from '../MenuList';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		overflowY: 'auto'
	},
	content: {
		padding: theme.spacing(0, 2)
	},
	profile: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'fit-content'
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		marginTop: theme.spacing(1)
	},
	divider: {
		marginTop: theme.spacing(2)
	},
	navigation: {
		marginTop: theme.spacing(2)
	}
}));

export default function NavBarMenu({ navConfig, isOpen, closeNavBar, handleNavBarMobile, className, ...rest }) {
	const classes = useStyles();
	const location = useLocation();
	useEffect(
		() => {
			if (isOpen) {
				closeNavBar && closeNavBar();
			}

			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[ location.pathname ]
	);

	const menuList = (
		<div className={classes.content}>
			{/* <div className={classes.profile}>
				<Avatar alt="Person" className={classes.avatar} component={RouterLink} src={''} to="/" />
				<Typography className={classes.name} variant="h4">
					John Doe
				</Typography>
				<Typography variant="body2">Inventory Manager</Typography>
			</div> */}
			{/* <Divider className={classes.divider} /> */}
			<nav className={classes.navigation}>
				{navConfig.map((list) => <MenuList key={list.title} pages={list.pages} title={list.title} />)}
			</nav>
		</div>
	);

	return (
		<Fragment>
			<Drawer anchor="left" onClose={closeNavBar} open={isOpen} variant="temporary">
				<Paper {...rest} className={clsx(classes.root, className)} elevation={1} square>
					{menuList}
				</Paper>
			</Drawer>
		</Fragment>
	);
}
