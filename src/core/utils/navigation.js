import DateRangeIcon from '@material-ui/icons/DateRange';
import BarChartIcon from '@material-ui/icons/BarChart';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default [
	{
		title: 'Pages',
		pages: [
			{
				title: 'My Profile',
				href: '/profile',
				icon: PersonIcon
			},
			{
				title: 'My Teams',
				href: '/teams',
				icon: PeopleOutlineIcon
			},
			{
				title: 'Live Map',
				href: '/live',
				icon: RoomIcon
			},
			{
				title: 'Notification',
				href: '/notification',
				icon: NotificationsNoneIcon
			},
			{
				title: 'Reports',
				href: '/report',
				icon: BarChartIcon
			}
		]
	}
];
