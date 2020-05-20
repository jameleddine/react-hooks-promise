/* eslint-disable */

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import EnhancedTableHead from './EnhancedTableHead.js'
import EnhancedTableToolbar from './EnhancedTableToolbar.js'

import IconButton from '@material-ui/core/IconButton'

import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import Tooltip from '@material-ui/core/Tooltip'

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
})

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0)
  }

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1)
  }

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1)
  }

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    )
  }

  render () {
    const { classes } = this.props
    const { count, page, rowsPerPage, onChangePage } = this.props
    return (
      <div className={classes.root}>
        <Tooltip title='First Page'>
          <span>
            <IconButton
              onClick={this.handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label='first page'
            >
              <FirstPageIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title='Previous Page'>
          <span>
            <IconButton
              onClick={this.handleBackButtonClick}
              disabled={page === 0}
              aria-label='previous page'
            >
              <KeyboardArrowLeft />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title='Next Page'>
          <span>
            <IconButton
              onClick={this.handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label='next page'
            >
              <KeyboardArrowRight />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title='Last Page'>
          <span>
            <IconButton
              onClick={this.handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label='last page'
            >
              <LastPageIcon />
            </IconButton>
          </span>
        </Tooltip>
      </div>
    )
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions)

function desc (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort (array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting (order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  searchfield: {
    marginLeft: 16
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
})

class EnhancedTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      dense: false,
      page: 0,
      rowsPerPage: 10
    }
  }
  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  }

  handleSelectAllClick = async event => {
    const { tableData } = this.props

    if (event.target.checked) {
      await this.setState(state => ({ selected: tableData.map(n => n.uid) }))
    } else {
      await this.setState(state => ({ selected: [] }))
    }
    return
  }

  handleClick = (event, name) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    this.setState({ selected: newSelected })
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
    this.setState({ page: 0 })
  }

  handleChangeDense = event => {
    this.setState({ dense: event.target.checked })
  }

  isSelected = name => this.state.selected.indexOf(name) !== -1

  deleteAll = async event => {
    await this.props.deleteAll(this.state.selected)
    this.state.selected = []
  }

  render () {
    const {
      classes,
      tableData,
      location,
      rowsPerPageOptions,
      tableHead,
      tableName
    } = this.props
    const { selected, order, orderBy, page, rowsPerPage } = this.state
    const emptyRows = tableData.length
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            tableName={tableName}
            handleMultipleDeleteClick={() => this.deleteAll()}
          />
          <div className={classes.tableWrapper}>
            <Table
              className={classes.table}
              aria-labelledby='tableTitle'
              size={this.state.dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={tableData.length}
                tableHead={tableHead}
              />
              <TableBody>
                {tableData.length > 0 &&
                  stableSort(tableData, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = this.isSelected(row.uid)
                      const labelId = `enhanced-table-checkbox-${index}`
                      return (
                        <TableRow
                          hover
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.uid}
                          selected={isItemSelected}
                        >
                          <TableCell padding='checkbox'>
                            <Checkbox
                              onClick={event =>
                                this.handleClick(event, row.uid)
                              }
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          <TableCell
                            component='th'
                            id={labelId}
                            scope='row'
                            padding='none'
                          >
                            {row.email}
                          </TableCell>
                          <TableCell align='right'>{row.actions}</TableCell>
                        </TableRow>
                      )
                    })}
                {emptyRows == 0 && (
                  <TableRow>
                    <TableCell
                      style={{ textAlign: 'center' }}
                      colSpan={this.props.tableHead.length}
                    >
                      No matching records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component='div'
            count={tableData.length != undefined ? tableData.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'previous page'
            }}
            nextIconButtonProps={{
              'aria-label': 'next page'
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActionsWrapped}
          />
        </Paper>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.dense}
              onChange={this.handleChangeDense}
            />
          }
          label='Dense padding'
        />
      </div>
    )
  }
}

export default withStyles(styles)(EnhancedTable)
