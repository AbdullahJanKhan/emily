import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Button, Grid, makeStyles, Typography, Card } from '@material-ui/core';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import logo from '../emily/logo.svg';
import tick from '../emily/tick.svg';

import Step1 from '../components/signup_step1';
import Step2 from '../components/signup_step2';
import Step3 from '../components/signup_step3';

function getSteps() {
    return ['SIGN UP', 'VERIFY CODE', 'USER PROFILE'];
}

function getStepContent(stepIndex, setActiveStep) {
    // ADD FUNCTION HERE
    switch (stepIndex) {
        case 0:
            return <Step1 setActiveStep={setActiveStep} />;
        case 1:
            return <Step2 setActiveStep={setActiveStep} />;
        case 2:
            return <Step3 setActiveStep={setActiveStep} />;
        default:
            return 'Unknown stepIndex';
    }
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxHeight: "100vh"
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
    },
    loginText: {
        fontWeight: 700,
        textAlign: "center",
    },
    loginCard: {
        justifyContent: "center",
        textAling: "center",
        color: '#1061b0',
        marginTop: "10%"
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
    steproot: {
        width: '100%',
    },
    stepRender: {
        justifyItems: "center",
        alignItems: "center",
        textAling: "center",
        margin: "auto",
    },
    stepper: {
        padding: 5,
        margin: 0,
    }
})

const ColorlibConnector = withStyles({
    active: {
        '& $line': {
            background: "linear-gradient(#59c1e8 0%, #3585da 100%)"
        },
    },
    completed: {
        '& $line': {
            background: "linear-gradient(#59c1e8 0%, #3585da 100%)"
        },
    },
    line: {
        height: 10,
        border: 0,
        backgroundColor: '#3585da',
        borderRadius: 5,
        marginTop: 10,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#3585da',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        background: "linear-gradient(#59c1e8 0%, #3585da 100%)",
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        background: "linear-gradient(#59c1e8 0%, #3585da 100%)",
    },
    avatarIcon: {
        backgroundColor: '#3585da',
        fontWeight: 600,
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <Avatar className={classes.avatarIcon}>1</Avatar>,
        2: <Avatar className={classes.avatarIcon}>2</Avatar>,
        3: <Avatar className={classes.avatarIcon}>3</Avatar>,
        completed: <Avatar className={classes.avatarIcon}><img src={tick} alt="Tick" style={{ width: "20px", height: "20px" }} /></Avatar>,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {completed ? icons["completed"] : icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};


export default function Signup() {

    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={6} className={classes.leftGrid}>
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
                        >SIGN IN</Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.loginBoxGrid}>
                    <Grid item xs={11} sm={8} className={classes.steproot}>
                        <Card className={classes.loginCard}>
                            <Grid item xs={12}>
                                <Stepper
                                    activeStep={activeStep}
                                    alternativeLabel
                                    connector={<ColorlibConnector />}
                                    className={classes.stepper}
                                >
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Grid>
                            <Grid container>
                                <Grid item sm={1}></Grid>
                                <Grid item xs={12} sm={10}>
                                    {getStepContent(activeStep, setActiveStep)}
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={6} xs={12}></Grid>
        </Grid>
    )
}