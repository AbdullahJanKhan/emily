import React from 'react';

import { Grid, makeStyles, Typography, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 30,
        background: "#fff",
        boxShadow: " 0px 3px 6px rgba(0, 0, 0, 0.16)",
        textAlign: "center",
        padding: 30,
        height: "85vh"
    },
    heading: {
        color: "#1061b0",
        textDecoration: "underline",
        fontWeight: "bold",
        margin: "auto",
    },
    textfiledcontainer: {
        justifyContent: "center",
    },
    textfieldstyle: {
        borderRadius: 10,
        background: "#fff",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.16)",
        width: "95%",
    },
    inputProps: {
        color: "#1061b0",
        fontWeight: "bold",
    }
}))

export default function Userprofile() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Typography variant="h5" className={classes.heading}>User Profile</Typography>
            <Grid container className={classes.textfiledcontainer}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="PATIENT ID"
                        defaultValue="31221321"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="USERNAME"
                        defaultValue="HADIABID98"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="FULL NAME"
                        defaultValue="ABDUL HADI ABID"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.textfiledcontainer}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="EMAIL ADDRESS"
                        defaultValue="HADI98ABDUL@GMAIL.COM"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="PCONTACT NUMBER"
                        defaultValue="+923143037736"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="OCCUPATION"
                        defaultValue="STUDENT"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.textfiledcontainer}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="COUNTRY"
                        defaultValue="PAKISTAN"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="GENDER"
                        defaultValue="MALE"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="DATE OF BIRTH"
                        defaultValue="23/05/1999"
                        InputProps={{
                            readOnly: true,
                        }}
                        InputLabelProps={{
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        variant="outlined"
                        className={classes.textfieldstyle}
                    />
                </Grid>
            </Grid>

        </Grid>
    )
}