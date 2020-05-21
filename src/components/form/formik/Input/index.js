import React from 'react';
import { useField } from 'formik';
import { Input } from 'components/form/native';

const useFormikProps = ({ name, ...props }) => {
	const [ field, meta ] = useField(name);
	const error = meta.touched && meta.error;
	return {
		...field,
		...props,
		id: !!error ? 'outlined-error-helper-text' : field.name,
		error: !!error,
		helperText: meta.touched && !!meta.error ? meta.error : props.helperText
	};
};
export default ({ ...props }) => {
	return <Input {...useFormikProps(props)} />;
};
