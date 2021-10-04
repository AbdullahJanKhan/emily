import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useFormik } from 'formik';
import { basicVal } from '../pages/yup';

import axios from "axios";

import { setuser } from "../pages/stateSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
    inputProps: {
        color: "#7ea2c4",
        fontWeight: "600",
        fontSize: 12,
        marginTop: 5,
    },
    Btn: {
        borderRadius: 15,
        background: "#3585da",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.16)",
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 10,
        marginBottom: 5,
        "&:hover": {
            background: "rgba(53,133,218,0.8)",
        }
    },
    BtnText: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 16,
    },
    typographyText: {
        fontWeight: 700,
        textAlign: "center",
        textDecoration: 'underline',
    },
    btmText: {
        textAlign: "center",
        padding: 5,
    },
    inputField: {
        fontSize: 12,
        marginTop: 5,
    },
})

export default function Step1({ setActiveStep }) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            phone_number: "",
        },
        validationSchema: basicVal,
        onSubmit: (values) => {
            console.log(values)
            axios.post("http://localhost:5000/users/signup", values)
                .then(res => {
                    if (res.data.success) {
                        dispatch(setuser(res.data.user))
                        setActiveStep(1);
                    }
                })
        },
    })
    return (
        <Grid>
            <Typography variant="h5" className={classes.typographyText}>SIGNUP</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    label="USERNAME"
                    type="text"
                    name="username"
                    className={classes.inputField}
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username} />
                <TextField
                    fullWidth
                    label="EMAIL"
                    type="email"
                    name="email"
                    className={classes.inputField}
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    label="0092XXXXXXXXXX"
                    type="text"
                    name="phone_number"
                    className={classes.inputField}
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                    helperText={formik.touched.phone_number && formik.errors.phone_number} />
                <TextField
                    fullWidth
                    label="PASSWORD"
                    type="password"
                    name="password"
                    className={classes.inputField}
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
                <TextField
                    fullWidth
                    label="CONFIRM PASSWORD"
                    type="password"
                    name="confirmpassword"
                    className={classes.inputField}
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                    helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                />
                <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    className={classes.Btn}
                    classes={{
                        contained: classes.Contained,
                        label: classes.BtnText,
                    }}
                >

                    CONTINUE
                </Button>
            </form>
            <Grid className={classes.btmText}>
                <Typography variant="body2" display="inline">
                    HAVE AN ACCOUNT?
                </Typography>
                <Typography variant="body2" className={classes.typographyText} display="inline" href="/login"> SIGNIN</Typography>
            </Grid>
        </Grid>
    )
}