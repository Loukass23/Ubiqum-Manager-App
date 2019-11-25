import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Button } from '@material-ui/core';
import { minHeight, breakpoints } from '@material-ui/system';


const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
        marginTop: theme.spacing(3),

    },

    paper: {
        // [breakpoints.down("md")]: {
        //     width: "100cw"
        // },

        minHeight: '100vh',
        paddingBottom: theme.spacing(3),

    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),

    }

})
interface Props {
    classes: any
}

const Settings: React.FC<Props> = ({ classes }) => {

    const [showAll, setShowAll] = useState(false)
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.toolbar} />

                <Typography className={classes.title} color="secondary" component="h1" variant="h3">
                    Settings
        </Typography>
                <Typography color="secondary" component="h5" variant="h5">
                    lorem
                </Typography>


            </Paper>
        </Container>
    );
}

export default withStyles(styles)(Settings)
