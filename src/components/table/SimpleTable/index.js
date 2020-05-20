import React from 'react';
import { TableRow, Typography, Table, TableHead, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	actions: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		'& > * + *': {
			marginLeft: 0
		}
	},
	head: {
		fontWeight: 'bold'
	},
	buttonIcon: {
		marginRight: theme.spacing(1)
	}
}));
export default function SimpleTable({ headCells, onEditRow, data }) {
	const classes = useStyles();

	return (
		<Table>
			<TableHead>
				<TableRow>
					{headCells.map((item, i) => (
						<TableCell key={i}>
							<Typography className={classes.head} variant="h6">
								{item.header}
							</Typography>
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((row, index) => {
					return (
						<TableRow key={index} selected>
							{headCells.map((cell, i) => {
								return <TableCell key={i}>{row[cell.field]}</TableCell>;
							})}
							{onEditRow && (
								<TableCell>
									{' '}
									<Button onClick={() => onEditRow(row)}>
										<EditIcon className={classes.buttonIcon} />
										Edit
									</Button>
								</TableCell>
							)}
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
