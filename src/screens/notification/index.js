import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Card,
  CardHeader,
  Divider,
  CardContent
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import { useStyles } from './hooks'
import { data } from './data'

export default function NotificationPage () {
  const classes = useStyles()

  return (
    <div className={classes.demo}>
      <Card className={classes.latest}>
        <CardHeader title='Notifications' className={classes.headerCard} />
        <Divider />
        <CardContent>
          <List>
            {data.map((notif, index) => {
              return (
                <>
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      {notif.avatar}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notif.name}
                    secondary={notif.content}
                  />
                  <ListItemSecondaryAction>
                    {notif.date}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                </>
              )
            })}

            
            {/* <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Single-line item'
                secondary='Secondary text'
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Single-line item'
                secondary='Secondary text'
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem> */}
          </List>
        </CardContent>
      </Card>
    </div>
  )
}
