import React from 'react';
import { TableContainer, Table as MUITable } from '@material-ui/core';

export default function Table({ children }) {
	return (
		<TableContainer>
			<MUITable>{children}</MUITable>
		</TableContainer>
	);
}
