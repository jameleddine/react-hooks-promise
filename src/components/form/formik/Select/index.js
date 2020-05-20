import React from 'react';
import { useField } from 'formik';
import { Select, FormControl, InputLabel, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2)
	},
	label: {
		marginLeft: '10px'
	}
}));
export default function FormikSelect({ id, label, children, onSelect, ...props }) {
	const [ field, meta, helpers ] = useField(props.name);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<FormControl fullWidth>
				<InputLabel id={id}>{label}</InputLabel>
				<Select
					labelId={id}
					{...field}
					{...props}
					onChange={async (...args) => {
						return onSelect && onSelect(...args);
					}}
				>
					{children}
				</Select>

				{meta.touched && meta.error ? <div style={{ color: 'red', padding: '10px' }}>{meta.error}</div> : null}
			</FormControl>
		</div>
	);
}

// import React from 'react';
// import { useField } from 'formik';
// import { Select, FormControl, InputLabel } from '@material-ui/core';

// export default function FormikSelect({ id, label, ...props }) {
// 	const [ field, meta ] = useField(props.name);

// 	return (
// 		<div
// 			style={{
// 				display: 'flex',
// 				paddingTop: '10px',
// 				paddingBottom: '10px',
// 				width: '100%',
// 				flexDirection: 'column'
// 			}}
// 		>
// 			<FormControl>
// 				<InputLabel id={id}>{label}</InputLabel>
// 				<Select labelId={id} {...field} {...props} />
// 			</FormControl>
// 			{meta.touched && meta.error ? <div style={{ color: 'red', padding: '10px' }}>{meta.error}</div> : null}
// 		</div>
// 	);
// }
