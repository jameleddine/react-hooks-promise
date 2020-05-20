import { fade, makeStyles } from "@material-ui/core";
// import { usePromise } from "core/hooks";
// import * as firebaseApi from "core/api/firebase";

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  title: {
    color: "black",
    textDecoration: "none",
    textAlign: "center" /* no underline */
  },
  flexGrow: {
    flexGrow: 1
  },

  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export const useSignOut = () => {
  // const { result, request, error } = usePromise(firebaseApi.signOut);
  // return {
  //   error,
  //   result,
  //   signOut: () => {
  //     request();
  //   }
  // };
};
