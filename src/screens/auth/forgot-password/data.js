import * as yup from 'yup';

export const initialValues = { email: '' };

export const validationSchema = yup.object().shape({
	email: yup.string().email('Email not valid').required()
});
