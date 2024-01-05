import * as yup from "yup";


const pwdRgex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\|`~])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

const pwdMsg = `Please create a stronger password with minmum 8 characters, 
    at least 1 upper case,
    1 numeric digit, 
    1 special cahracter.`;

export const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required("Please enter your name"),
    password: yup
    .string()
    .min(3)
    // .matches(pwdRgex, {"message" : pwdMsg})
    .required("Please enter your password")
});