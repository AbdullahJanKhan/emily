import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useFormik } from 'formik';
import { userprofile } from '../pages/yup';

const useStyles = makeStyles({
    inputProps: {
        color: "#7ea2c4",
        fontWeight: "bold",
        fontSize: 12,
        marginTop: 5,
    },
    Btn: {
        borderRadius: 15,
        background: "#3585da",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.16)",
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 15,
        marginBottom: 15,
    },
    BtnContained: {
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
    },
    typographyTextSub: {
        fontWeight: 600,
        textAlign: "center",
    },
    btmText: {
        textAlign: "center",
    },
    inputBtm: {
        width: "45%",
    },
    startIcon: {
        width: 25,
        height: 25,
    }
})

export default function Step3({ setActiveStep }) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            fullname: "",
            country: "",
            occupation: "",
            gender: "",
            dob: "",
        },
        validationSchema: userprofile,
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values))
            setActiveStep(3)
        },
    })

    return (
        <Grid>
            <Typography variant="h5" className={classes.typographyText}>USER PROFILE</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    label="FULL NAME"
                    type="text"
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                    helperText={formik.touched.fullname && formik.errors.fullname}
                />
                <TextField
                    fullWidth
                    label="COUNTRY"
                    type="text"
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                />
                <TextField
                    fullWidth
                    label="OCCUPATION"
                    type="text"
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    name="occupation"
                    value={formik.values.occupation}
                    onChange={formik.handleChange}
                    error={formik.touched.occupation && Boolean(formik.errors.occupation)}
                    helperText={formik.touched.occupation && formik.errors.occupation}
                />
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        <TextField
                            fullWidth
                            label="GENDER"
                            type="text"
                            InputLabelProps={{
                                className: classes.inputProps
                            }}
                            inputProps={{
                                className: classes.inputProps,
                            }}
                            name="gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.touched.gender && Boolean(formik.errors.gender)}
                            helperText={formik.touched.gender && formik.errors.gender}
                        />
                    </Grid>
                    <Grid sm={2} />
                    <Grid item xs={12} sm={5}>
                        <TextField
                            fullWidth
                            label="DATE OF BIRTH"
                            type="date"
                            InputLabelProps={{
                                className: classes.inputProps,
                                shrink: true,
                            }}
                            inputProps={{
                                className: classes.inputProps,
                            }}
                            name="dob"
                            value={formik.values.dob}
                            onChange={formik.handleChange}
                            error={formik.touched.dob && Boolean(formik.errors.dob)}
                            helperText={formik.touched.dob && formik.errors.dob}
                        />
                    </Grid>
                </Grid>
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.Btn}
                    classes={{
                        contained: classes.Contained,
                        label: classes.BtnText,
                    }}
                    type="submit"
                >
                    SIGNUP
                </Button>
            </form>
        </Grid>
    )
}