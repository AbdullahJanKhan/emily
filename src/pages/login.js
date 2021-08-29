import React from 'react';

import { Button, Grid, makeStyles, Typography, Card, TextField } from '@material-ui/core';
import logo from '../emily/logo.svg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    '@font-face': {
        fontFamily: 'Montserrat, sans-serif'
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
    loginCard: {
        justifyContent: "center",
        textAling: "center",
        marginTop: 100,
        color: '#1061b0',
        padding: 50,
    },
    inputProps: {
        color: "#1061b0",
        fontWeight: "bold",
    },
    inputField: {
        borderBottomColor: "#1061b0",
    },
    contained: {
        "&:hover": {
            background: "rgba(53,133,218,0.2)"
        }
    }
})

export default function Login() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={6} className={classes.leftGrid}>
                <Grid container>
                    <Grid item xs={3}>
                        <img src={logo} alt="Emily Logo" style={{ width: '100%', paddingTop: '10px' }} />
                    </Grid>
                    <Grid item xs={0} sm={5}></Grid>
                    <Grid item xs={3} sm={2}>
                        <Typography variant="body1" className={classes.homeText}>HOME</Typography>
                    </Grid>
                    <Grid item xs={6} sm={2}>
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
                    <Grid xs={8}>
                        <Card className={classes.loginCard}>
                            <Typography variant="h5" align='center'>LOGIN</Typography>
                            <TextField
                                fullWidth
                                label="USERNAME"
                                InputLabelProps={{
                                    className: classes.inputProps
                                }}
                                inputProps={{
                                    className: classes.inputProps
                                }}
                            />
                            <TextField
                                label="PASSWORD"
                                fullWidth
                                InputLabelProps={{
                                    className: classes.inputProps
                                }}
                                inputProps={{
                                    className: classes.inputProps,
                                }}
                                classes={{
                                    root: classes.inputField
                                }}
                                className={classes.inputField}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={6}></Grid>
        </Grid>
    )
}