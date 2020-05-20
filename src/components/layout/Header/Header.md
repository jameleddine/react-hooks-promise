Header example:

```jsx
import { useState } from 'react'

import { HashRouter } from 'react-router-dom'
import { Header } from 'components/layout'
import { makeStyles } from '@material-ui/core/styles'

const [isOpenNavBar, setOpenNavBarMobile] = useState(false)

const handleNavBarMobile = () => {
  setOpenNavBarMobile(!isOpenNavBar)
}
const useStyles = makeStyles(() => ({
  topBar: {
    zIndex: 2,
    position: 'relative'
  }
}))
const classes = useStyles()
;
// HashRouter should removed when using the Navbar inside the parent component

  <HashRouter>
    <Header className={classes.topBar} handleNavBar={handleNavBarMobile} />
  </HashRouter>

```
