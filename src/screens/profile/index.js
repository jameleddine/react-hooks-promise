import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Divider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  avatar:{
    width:200,
    height:200
  },
  info:{
    fontWeight:900
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
export default function ProfilePage () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardHeader title='Operator Information' />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              {/* <img src={fran} className={classes.avatar}/> */}
              {/* <Paper className={classes.paper}>xs=6</Paper> */}

            </Grid>
            <Grid item xs={8} className={classes.info}>
            <p>Franziska Ridzewski </p>
            <p>  Solutions </p>
            <p>Group Director Peopel </p>
            <p>franziska@  </p>
            <p>  000 000 002</p>
            </Grid>
          </Grid>
          
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  )
}
