NavBar example:

```js
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavBar } from 'components/layout'
import { HashRouter } from 'react-router-dom'
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

const useStyles = makeStyles(theme => ({
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto'
  }
}))

const classes = useStyles()
const [isOpenNavBar, setOpenNavBarMobile] = useState(false)

const handleNavBarMobile = () => {
  setOpenNavBarMobile(!isOpenNavBar)
}
const closeNavBar = () => setOpenNavBarMobile(false)
// HashRouter should removed when using the Navbar inside the parent component
;<HashRouter>
  <NavBar
    navConfig={navConfig}
    className={classes.navBar}
    handleNavBarMobile={handleNavBarMobile}
    closeNavBar={closeNavBar}
    isOpen={isOpenNavBar}
  />
</HashRouter>


```
