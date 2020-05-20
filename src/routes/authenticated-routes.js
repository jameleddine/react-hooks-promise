import React from 'react';
import { Redirect } from 'react-router-dom';
import ProfilePage from 'screens/profile';
import DashboardLayout from 'screens/layouts/dashboard';

import NotificationPage from 'screens/notification';
export const routes = [
	{ path: '/', exact: true, component: () => <Redirect to="/dashboard" /> },
	{ path: '/sign-in', exact: true, component: () => <Redirect to="/dashboard" /> },
	{
		route: '/',
		component: DashboardLayout,
		routes: [
			{
				path: '/profile',
				exact: true,
				component: ProfilePage
			},
			
			{
				path: '/notification',
				exact: true,
				component: NotificationPage
			}
		]
	}
];

export const routes_titles = {
	'/dashboard': 'LCI Sensor Dashboard',
	'/inventory': 'List of Devices',
	'/inventory/:id/:tab': 'Device Details',
	'/manage/claims': 'Account claims',
	'/manage/users': 'User management',
	'/profile': 'User profile',
};
