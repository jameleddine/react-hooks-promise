Input example:

```js
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const initialValues = { email: "", password: "" };
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email not valid")
    .required(),
  password: yup.string().required().min(8)
});

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	}
}));

const classes = useStyles();
<Formik  validationSchema={validationSchema} initialValues={initialValues}>
<Form className={classes.form}>

<Input
  variant="outlined"
  margin="normal"
  fullWidth
  type="email"
  label="Email Address"
  name="email"
/>
<Input
  variant="outlined"
  margin="normal"
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
/>
</Form>
</Formik>

```
