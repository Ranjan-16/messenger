import * as Yup from "yup";

export const signUpSchema = Yup.object({
  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});
