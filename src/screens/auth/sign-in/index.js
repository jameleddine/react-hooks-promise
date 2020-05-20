import React from "react";
import { Formik, Form } from "formik";
import { CssBaseline, Container, Typography, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { TextField } from "components/form/formik";
import { Button, ErrorMessage } from "components/kit";
import { initialValues, validationSchema } from "./data";
import { useStyles, useSignIn } from "./hooks";

// import * as firebaseApi from "core/api/firebase";

export default function LoginPage() {
  const classes = useStyles();
  const { error, isLoading, signIn } = useSignIn();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Welcome
        </Typography>
        <Formik
          onSubmit={signIn}
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
                label={"email"}
                name="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label={"password"}
                type="password"
                autoComplete="current-password"
              />
              <p>
                <Link to="forgot-password">Forgot your password?</Link>
              </p>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoading}
                className={classes.submit}
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <p>Sign in with:</p>
      <div className={classes.paper_social}>
        <Button
          // onClick={firebaseApi.signInWithGoogle}
          variant="outlined"
          color="primary"
          className={classes.social}
        >
          Google
        </Button>
        <Button
          // onClick={firebaseApi.signInWithFacebook}
          variant="outlined"
          color="primary"
          className={classes.social}
        >
          Facebook
        </Button>
        <Button
          // onClick={firebaseApi.signInWithMicrosoft}
          variant="outlined"
          color="primary"
          className={classes.social}
        >
          Microsoft
        </Button>
      </div>
    </Container>
  );
}
