import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player'

// import Drawer from "../components/drawer";
import Em_db from "../animations/dashboard.mp4";
import Em_es from "../animations/emily_session.mp4";
import Em_lg from "../animations/sample.mp4";

const data = [
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
        background: "#f5f5f5",
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
        objectFit: "cover"

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
}))


export default function Profile() {
    const classes = useStyles();
    const [count, setcount] = React.useState(0);
    const vidref = React.useRef();

    React.useEffect(() => {
        if (count < data.length - 1) {
            setTimeout(() => {
                console.log(count);
                setcount(count + 1);
                if (vidref.current) {
                    vidref.current.load();
                }

            }, 5000);
        }
    })
    // < video autoPlay muted className = { classes.videoDim } ref = { vidref } >
    //     <source src={data[count]['src']} type="video/mp4" />
    //         </video >

    return (

        <Grid container direction="column"
            justifyContent="flex-end"
            alignItems="flex-end" className={classes.root}>
            <Grid item xs={12}>
                <ReactPlayer url={data[count]['src']} playing playsinline />
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
                    START SESSION
                </Button>
            </Grid>
        </Grid>
    )
}

