import * as yup from "yup";

export const initialValues = { email: "", password: "" };

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email not valid")
    .required(),
  password: yup.string().required()
});
