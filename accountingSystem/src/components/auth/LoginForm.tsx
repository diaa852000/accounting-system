import { useState } from "react";
import { Link } from "react-router-dom";

import { InputAdornment, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';

import { FormikHelpers, useFormik } from "formik"
import { loginSchema } from "../../schema/schema";
import { login } from "../../sevices/authService";
import { useDispatch } from "react-redux";


type LoginCredentials = {
    username: string;
    password: string
}

const initialValues: LoginCredentials = {
    username: "",
    password: ""
};



function LoginForm() {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    
    const onSubmit = (values: LoginCredentials, actions: FormikHelpers<LoginCredentials>) => {
        actions.resetForm();
        login(values.username, values.password, dispatch);
    
    }

    const handleTogglePassword = () => setShowPassword(prev => !prev);

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit
    });
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="px-2 py-4"
            >
                <TextField
                    name="username"
                    type="text"
                    placeholder="Username"

                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    variant="standard"
                    color="success"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlinedIcon sx={{ color: "#245d60" }} />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        width: '100%',
                        mb: 6,
                    }}
                    error={!!errors.username && touched.username}
                    helperText={errors.username && touched.username ? errors.username : ''}
                />

                <TextField
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"

                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}

                    variant="standard"
                    color="success"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon sx={{ color: "#245d60" }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePassword}
                                    edge="end"
                                    aria-label="toggle password visibility"
                                    sx={{ zIndex: 2 }}
                                    size="small"
                                >
                                    {showPassword ? <VisibilityOffOutlinedIcon sx={{ color: "#245d60" }} /> : <VisibilityOutlinedIcon sx={{ color: "#245d60" }} />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    sx={{ width: '100%', mb: 2, zIndex: 1 }}
                    error={!!errors.password && touched.password}
                    helperText={errors.password && touched.password ? errors.password : ''}
                />

                <Link
                    to={'/'}
                    className="capitalize text-[15px] md:text-base text-end w-full block font-medium 
                text-[#245d60]hover:text-[#616161] transition-all ease-in-out duration-150"
                >
                    forgot password?
                </Link>

                <button
                    type="submit"
                    className="border rounded-2xl p-3 block w-full mt-10 bg-[#245d60] 
                text-white text-lg capitalize font-medium hover:bg-[#2d7579] transition-all ease-in-out duration-150"
                >
                    login
                </button>
            </form>
        </>
    )
}

export default LoginForm