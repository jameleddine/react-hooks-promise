import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import { usePromise } from 'core/hooks'
import { Hidden } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));



