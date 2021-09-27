import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from "@material-ui/core/InputAdornment";

import sms from "../emily/sms.svg";
import email from "../emily/email.svg";

import { useFormik } from 'formik';
import { validatePin } from '../pages/yup';

const useStyles = makeStyles({
    inputProps: {
        color: "#7ea2c4",
        fontWeight: "bold",
        marginTop: 20,
    },
    Btn: {
        borderRadius: 15,
        background: "#3585da",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.16)",
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 10,
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
        fontSize: 12,
        textAlign: "center"
    },
    btmText: {
        textAlign: "center"
    },
    startIcon: {
        width: 30,
        height: 30,
    }
})

export default function Step2({ setActiveStep }) {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            smspin: "",
            emailpin: "",
        },
        validationSchema: validatePin,
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values))
            setActiveStep(2)
        },
    })

    return (
        <Grid>
            <Typography variant="h5" className={classes.typographyText}>VERIFICATION</Typography>
            <Typography
                variant="subtitle2"
                className={classes.typographyTextSub}
            >
                PLEASE ENTER OTP RECIEVED VIA EMAIL AND SMS
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    type="text"
                    name="smspin"
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <img src={sms} alt="SMS icon" className={classes.startIcon} />
                            </InputAdornment>
                        )
                    }}
                    value={formik.values.smspin}
                    onChange={formik.handleChange}
                    error={formik.touched.smspin && Boolean(formik.errors.smspin)}
                    helperText={formik.touched.smspin && formik.errors.smspin}
                />
                <TextField
                    fullWidth
                    type="text"
                    name="emailpin"
                    InputLabelProps={{
                        className: classes.inputProps
                    }}
                    inputProps={{
                        className: classes.inputProps,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <img src={email} alt="Email icon" className={classes.startIcon} />
                            </InputAdornment>
                        )
                    }}
                    value={formik.values.emailpin}
                    onChange={formik.handleChange}
                    error={formik.touched.emailpin && Boolean(formik.errors.emailpin)}
                    helperText={formik.touched.emailpin && formik.errors.emailpin}
                />
                <Grid>
                    <Typography variant="overline" className={classes.typographyText}>
                        RESEND OTP IN 30 SECONDS
                    </Typography>
                </Grid>
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
        </Grid>
    )
}