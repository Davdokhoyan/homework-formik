import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const teamName_numberRules = /^[0-9a-zA-Z\s]+$/;

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "First Name must be at least 3 characters long")
    .required("Required"),
  lastName: yup
    .string()
    .min(3, "Last Name must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  teamName_number: yup
    .string()
    .min(4)
    .matches(teamName_numberRules, {
      message:
        "Team Name_number must match",
    })
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
