Navigation example:

```js
import { HashRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/HomeOutlined';

const navConfig = [
	{
		title: 'Pages',
		pages: [
			{
				title: 'Dashboard',
				href: '/dashboard',
				icon: HomeIcon
			}
		]
	}
];
// HashRouter should removed when using the Navigation inside the parent component

<HashRouter>
<Navigation title="home" pages={navConfig[0].pages}/>
</HashRouter>
```