import React from 'react';
import { TextField, FormControl } from '@material-ui/core';

export default ({ ...props }) => {
	return <TextField fullWidth {...props} />;
};
