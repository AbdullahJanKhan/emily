import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Webcam from "react-webcam";
// import Drawer from "../components/drawer";
import Em_db from "../animations/dashboard.mp4";
import Em_es from "../animations/emily_session.mp4";
import Em_sp from "../animations/emily_sp.mp4";
import Em_lg from "../animations/sample.mp4";

const data = [
    {
        src: Em_sp,
    },
    {
        src: Em_db,
    },
    {
        src: Em_es
    },
    {
        src: Em_lg
    },
]




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        minHeight: "100vh",
        overflow: "hidden"
    },
    reportGrid: {

    },

    videoDim: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        minWidth: '100vw',
        height: '100vh',
        objectFit: "cover",
        zIndex: '-1',

    },
    BtnPlacement: {
        marginBottom: "2%",
        marginRight: '2%',

    },
    Btn: {
        borderRadius: 5,
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
            color: "#3585da",
        }
    },
    BtnText: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 16,
    },
    Wbcam: {
        width: "200px",
        height: "200px"
    }
}))


export default function Profile() {
    const classes = useStyles();
    const [count, setcount] = React.useState(0);
    const vidref = React.useRef();
    var score;

    React.useEffect(() => {
        if (count < data.length - 1) {
            setTimeout(() => {
                console.log(count);
                setcount(count + 1);
                if (vidref.current) {
                    vidref.current.load();
                }

            }, 2000);
        }
    })

    // <video autoPlay className={classes.videoDim} ref={vidref}>
    //     <source src={data[count]['src']} type="video/mp4" />
    // </video>

    return (

        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <video autoPlay muted className={classes.videoDim}>
                    <source src={Em_es} type="video/mp4" />
                </video>
                <Webcam height={200} height={200} mirrored />
            </Grid>
            <Grid item className={classes.Wbcam} >

            </Grid>
            <Grid container direction="column"
                justifyContent="flex-end"
                alignItems="flex-end">
            <Grid item xs={3} className={classes.BtnPlacement}>
                <Button fullWidth
                    variant="contained"
                    className={classes.Btn}
                    classes={{
                        contained: classes.Contained,
                        label: classes.BtnText,
                    }}
                >
                    END SESSION
                </Button>
                <Grid>
                    <Grid item xs={3} className={classes.BtnPlacement}>
                        <Button fullWidth
                            variant="contained"
                            className={classes.Btn}
                            classes={{
                                contained: classes.Contained,
                                label: classes.BtnText,
                            }}
                        >
                            PAUSE SESSION
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.BtnPlacement}>
                        <Button fullWidth
                            variant="contained"
                            className={classes.Btn}
                            classes={{
                                contained: classes.Contained,
                                label: classes.BtnText,
                            }}
                        >
                            REPEAT QUESTION
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

