import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from "@material-ui/core/InputAdornment";

import calender from "../emily/calender.svg";

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
    return (
        <Grid>
            <Typography variant="h5" className={classes.typographyText}>USER PROFILE</Typography>
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
                    />
                </Grid>
                <Grid sm={2} />
                <Grid item xs={12} sm={5}>
                    <TextField
                        fullWidth
                        label="DATE OF BIRTH"
                        type="text"
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <img src={calender} alt="Calender icon" className={classes.startIcon} />
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </Grid>
            <Button fullWidth
                variant="contained"
                className={classes.Btn}
                classes={{
                    contained: classes.Contained,
                    label: classes.BtnText,
                }}
                onClick={() => setActiveStep(3)}
            >
                SIGNUP
            </Button>
        </Grid>
    )
}