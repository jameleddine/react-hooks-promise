import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { NavBar, Header } from 'components/layout';
import navConfig from 'core/utils/navigation';
import { routes_titles } from 'routes/authenticated-routes';

const UrlPattern = require('url-pattern');

const useStyles = makeStyles(() => ({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden'
		
	},
	topBar: {
		zIndex: 2,
		position: 'relative'
	},
	container: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		// height: '100vh',
		padding:'50px',
		background:'#eee'
	},
	navBar: {
		zIndex: 3,
		width: 256,
		minWidth: 256,
		flex: '0 0 auto'
	},
	content: {
		// overflowY: 'auto',
		flex: '1 1 auto'
	}
}));

export default function DashboardLayout({ route, match, location }) {
	const classes = useStyles();
	const [ isOpenNavBar, setOpenNavBarMobile ] = useState(false);

	const handleNavBarMobile = () => {
		setOpenNavBarMobile(!isOpenNavBar);
	};
	const closeNavBar = () => setOpenNavBarMobile(false);

	const getTitle = (location) => {
		for (let key in routes_titles) {
			const pattern = new UrlPattern(key);
			if (pattern.match(location.pathname)) return routes_titles[key];
		}
	};
	return (
		<div className={classes.root}>
			<Header className={classes.topBar} title={getTitle(location)} handleNavBar={handleNavBarMobile} />
			<div className={classes.container}>
				<NavBar
					navConfig={navConfig}
					className={classes.navBar}
					handleNavBarMobile={handleNavBarMobile}
					closeNavBar={closeNavBar}
					isOpen={isOpenNavBar}
				/>
				<main className={classes.content}>
					<Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
				</main>
			</div>
		</div>
	);
}
