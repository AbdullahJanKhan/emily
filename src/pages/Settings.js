import React from 'react';

import { Button, Grid, makeStyles, Typography, Card, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: "#1061b0",
        textDecoration: "underline",
        fontWeight: "bold",
        textAlign: "center",
    },
    subheading: {
        color: "#3585da",
        textDecoration: "underline",
        fontWeight: "bold",
    },
    row: {
        padding: "10px 50px 10px 50px",
        marginTop: 20,
    },
    textfiledcontainer: {
        padding: "20px 10px 30px 10px",
        marginTop: 25,
        borderRadius: 10,
        background: "#fff",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.16)",
    },
    textfieldstyle: {
        borderRadius: 10,
        background: "#fff",
        marginRight: 20,
    },
    inputProps: {
        color: "#3585da",
        fontWeight: "bold",
    },
    btn: {
        borderRadius: 20,
        background: "#3585da",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        color: "#fff",
        fontWeight: "bold",
    }
}))

export default function Settings() {
    const classes = useStyles();
    return (
        <Grid item>
            <Typography variant="h5" className={classes.heading}>SETTINGS</Typography>
            <Grid item className={classes.row}>
                <Typography variant="body1" className={classes.subheading}>CHANGE CONTACT NUMBER</Typography>
                <Grid container className={classes.textfiledcontainer}>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <Button className={classes.btn}>UPDATE</Button>
                </Grid>
            </Grid>
            <Grid item className={classes.row}>
                <Typography variant="body1" className={classes.subheading}>CHANGE CONTACT NUMBER</Typography>
                <Grid container className={classes.textfiledcontainer}>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <Button className={classes.btn}>UPDATE</Button>
                </Grid>
            </Grid>
            <Grid item className={classes.row}>
                <Typography variant="body1" className={classes.subheading}>CHANGE CONTACT NUMBER</Typography>
                <Grid container className={classes.textfiledcontainer}>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.inputProps
                        }}
                        inputProps={{
                            className: classes.inputProps,
                        }}
                        className={classes.textfieldstyle}
                    />
                    <Button className={classes.btn}>UPDATE</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}