import React from 'react';

import { Grid, makeStyles, Typography, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    heading: {
        color: "#1061b0",
        textDecoration: "underline",
        fontWeight: "bold",
        textAlign: "center",
    },
    textfiledcontainer: {
        marginTop: 20,
        justifyContent: "center",
    },
    textfieldstyle: {
        borderRadius: 10,
        background: "#fff",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.16)",
        marginRight: 20,
    },
    inputProps: {
        color: "#1061b0",
        fontWeight: "bold",
    }
}))

export default function Userprofile() {
    const classes = useStyles();
    return (
        <Grid container>
            <Typography variant="h5" className={classes.heading}>User Profile</Typography>
            <Grid container className={classes.textfiledcontainer}>
                <TextField
                    id="outlined-read-only-input"
                    label="PatientID"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Username"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Fullname"
                    defaultValue="Hello World"
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
            <Grid container className={classes.textfiledcontainer}>
                <TextField
                    id="outlined-read-only-input"
                    label="PatientID"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Username"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Fullname"
                    defaultValue="Hello World"
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
            <Grid container className={classes.textfiledcontainer}>
                <TextField
                    id="outlined-read-only-input"
                    label="PatientID"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Username"
                    defaultValue="Hello World"
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
                <TextField
                    id="outlined-read-only-input"
                    label="Fullname"
                    defaultValue="Hello World"
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
    )
}