import React from "react";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Typography
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputIcon from "@material-ui/icons/Input";
import clsx from "clsx";

import { useStyles } from "./hooks";

export default function Header({ className, handleNavBar, title, ...rest }) {
  const classes = useStyles();
  // const { signOut } = useSignOut();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <IconButton color="default" onClick={handleNavBar}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" className={classes.title}>
            Group
        </Typography>

        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Hidden>
        <Button className={classes.logoutButton} >
          <InputIcon className={classes.logoutIcon} />
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
