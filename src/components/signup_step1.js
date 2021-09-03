import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    return (
        <Grid>
            <Typography variant="h5" className={classes.typographyText}>SIGNUP</Typography>
            <TextField
                fullWidth
                label="USERNAME"
                type="text"
                className={classes.inputField}
                InputLabelProps={{
                    className: classes.inputProps
                }}
                inputProps={{
                    className: classes.inputProps,
                }}
            />
            <TextField
                fullWidth
                label="EMAIL"
                type="email"
                className={classes.inputField}
                InputLabelProps={{
                    className: classes.inputProps
                }}
                inputProps={{
                    className: classes.inputProps,
                }}
            />
            <TextField
                fullWidth
                label="CONTACT NUMBER"
                type="text"
                className={classes.inputField}
                InputLabelProps={{
                    className: classes.inputProps
                }}
                inputProps={{
                    className: classes.inputProps,
                }}
            />
            <TextField
                fullWidth
                label="PASSWORD"
                type="password"
                className={classes.inputField}
                InputLabelProps={{
                    className: classes.inputProps
                }}
                inputProps={{
                    className: classes.inputProps,
                }}
            />
            <TextField
                fullWidth
                label="CONFIRM PASSWORD"
                type="password"
                className={classes.inputField}
                InputLabelProps={{
                    className: classes.inputProps
                }}
                inputProps={{
                    className: classes.inputProps,
                }}
            />
            <Button fullWidth
                variant="contained"
                className={classes.Btn}
                classes={{
                    contained: classes.Contained,
                    label: classes.BtnText,
                }}
                onClick={() => setActiveStep(1)}
            >

                CONTINUE
            </Button>
            <Grid className={classes.btmText}>
                <Typography variant="body2" display="inline">
                    HAVE AN ACCOUNT?
                </Typography>
                <Typography variant="body2" className={classes.typographyText} display="inline">SIGNIN</Typography>
            </Grid>
        </Grid>
    )
}