import React from 'react';

import { Button, Grid, makeStyles, Typography, Card, TextField } from '@material-ui/core';

import logo from '../emily/logo.svg';
import google from "../emily/google.svg";
import facebook from "../emily/facebook.svg";

import * as yup from "yup";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { login, setuser, settoken } from "../pages/stateSlice";
import axios from "axios";


const validationSchema = yup.object({
    username: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .max(16, 'Password should be of maximum 16 characters length')
        .required('Password is required'),
});

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    leftGrid: {
        borderRadius: "0px 50px 50px 0px",
        background: "linear-gradient(#1061b0 0%, #2374c6 48.66%, #3585da 100%)",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.16)",
        minHeight: "100vh",
    },
    leftGridHeaderBtn: {
        borderRadius: "0px 50px 0px 50px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        background: "#3585da",
        color: "#fff",
        fontWeight: 'bold',
        overflow: 'hidden',
        right: 5,
    },
    homeText: {
        color: "#fff",
        fontWeight: 'bold',
        padding: "5px 10px 0px 10px",
    },
    loginBoxGrid: {
        justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center'
    },
    loginText: {
        fontWeight: 700,
        textAlign: "center",
    },
    loginCard: {
        justifyContent: "center",
        textAling: "center",
        marginTop: 100,
        color: '#1061b0',
        padding: 30,
    },
    inputProps: {
        color: "#7ea2c4",
        fontWeight: "bold",
    },
    inputField: {
        marginBottom: 15,
    },
    contained: {
        "&:hover": {
            background: "rgba(53,133,218,0.8)"
        }
    },
    forgotPassword: {
        fontWeight: 600,
        textDecoration: 'underline',
        color: "#7ea2c4",
        marginBottom: 30,
    },
    loginBtn: {
        borderRadius: 15,
        background: "#3585da",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.16)",
        fontWeight: 'bold',
        color: "#fff",
    },
    loginContained: {
        "&:hover": {
            background: "rgba(53,133,218,0.8)",
        }
    },
    loginGContained: {
        "&:hover": {
            background: "rgba(220,78,65,0.8)",
        }
    },
    loginBtnText: {
        fontWeight: 'bold',
        color: "#fff",
    },
    googleBtn: {
        backgroundColor: "#dc4e41",
        fontWeight: 600,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        margin: 5,
    },
    facebookBtn: {
        backgroundColor: "#1976d2",
        fontWeight: 600,
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        margin: 5,
    },
    btnContainer: {
        justifyContent: "space-between",
        marginTop: 25,
    }
})

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post("http://localhost:5000/user/login", values)
                .then(res => {
                    if (res.data.success) {
                        dispatch(setuser(res.data.user))
                        dispatch(settoken(res.data.token))
                        dispatch(login())
                    }
                })
        },
    });

    return (
        <Grid container className={classes.root}>
            <Grid item sm={6} className={classes.leftGrid}>
                <Grid container>
                    <Grid item xs={3}>
                        <img src={logo} alt="Emily Logo" style={{ width: '100%', paddingTop: '10px' }} />
                    </Grid>
                    <Grid item md={5}></Grid>
                    <Grid item xs={3} md={2}>
                        <Typography variant="body1" className={classes.homeText}>HOME</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.leftGridHeaderBtn}
                            classes={{
                                contained: classes.contained
                            }}
                        >SIGN UP</Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.loginBoxGrid}>
                    <Grid item xs={9}>
                        <Card className={classes.loginCard}>
                            <Typography variant="h4" className={classes.loginText}>LOGIN</Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="USERNAME"
                                    name="username"
                                    InputLabelProps={{
                                        className: classes.inputProps
                                    }}
                                    inputProps={{
                                        className: classes.inputProps
                                    }}
                                    classes={{
                                        root: classes.inputField
                                    }}
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                                <TextField
                                    label="PASSWORD"
                                    name="password"
                                    fullWidth
                                    InputLabelProps={{
                                        className: classes.inputProps
                                    }}
                                    inputProps={{
                                        className: classes.inputProps,
                                    }}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <Typography variant="body1" className={classes.forgotPassword}>FORGOT PASSWORD?</Typography>
                                <Button fullWidth
                                    variant="contained"
                                    className={classes.loginBtn}
                                    classes={{
                                        contained: classes.loginContained,
                                        label: classes.loginBtnText,
                                    }}
                                    type="submit"
                                >
                                    LOGIN
                                </Button>
                            </form>
                            <Grid container className={classes.btnContainer}>
                                <Grid item xs={12} md={5}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={classes.googleBtn}
                                        classes={{
                                            contained: classes.loginGContained,
                                            label: classes.loginBtnText,
                                        }}
                                        startIcon={<img src={google} alt="google" style={{ width: "25px", height: "25px" }} />}
                                    >
                                        GOOGLE
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={classes.facebookBtn}
                                        classes={{
                                            contained: classes.loginContained,
                                            label: classes.loginBtnText,
                                        }}
                                        startIcon={<img src={facebook} alt="facebook" style={{ width: "25px", height: "25px" }} />}
                                    >
                                        FACEBOOK
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={6}></Grid>
        </Grid>
    )
}