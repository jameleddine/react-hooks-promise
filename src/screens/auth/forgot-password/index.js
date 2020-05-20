import React from 'react';
import { Formik, Form } from 'formik';
import { CssBaseline, Container, Typography, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { TextField } from 'components/form/formik';
import { Button, ErrorMessage } from 'components/kit';
import { initialValues, validationSchema } from './data';
import { useStyles, useForgotPassword } from './hooks';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
	const classes = useStyles();
	const { error, forgotPassword, isLoading } = useForgotPassword();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography className={classes.title} component="h1" variant="h5">
					Forgot password
				</Typography>
				<Formik
					onSubmit={forgotPassword}
					validationSchema={validationSchema}
					initialValues={initialValues}
					className={classes.paper}
				>
					{({ errors }) => (
						<Form className={classes.form}>
							{error && <ErrorMessage>{error.message}</ErrorMessage>}
							<TextField
								variant="outlined"
								margin="normal"
								fullWidth
								type="email"
								label="Email Address"
								name="email"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Send
							</Button>
						</Form>
					)}
				</Formik>
			</div>
		</Container>
	);
}
