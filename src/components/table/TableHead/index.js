import React from 'react';
import { TableHead, TableSortLabel, TableRow, TableCell, Checkbox, Typography } from '@material-ui/core';
export default function EnhancedTableHead({ onSelectAllClick, cells, data, numSelected, rowCount, dispatch }) {
	const handleSort = (key) => {
		if (data.key === key) {
			dispatch({ isDescending: !data.isDescending });
		} else {
			dispatch({ key: key });
		}
	};
	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all devices' }}
					/>
				</TableCell>
				{cells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={data.key === headCell.id ? data.isDescending ? 'dsc' : 'asc' : false}
					>
						<TableSortLabel
							active={data.key === headCell.id}
							direction={data.isDescending ? 'dsc' : 'asc'}
							onClick={() => handleSort(headCell.id)}
						>
							<Typography variant="h6">{headCell.label}</Typography>
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}
