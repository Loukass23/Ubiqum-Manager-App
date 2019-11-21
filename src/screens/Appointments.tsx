import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import { minHeight } from '@material-ui/system';
import Calendly from '../components/Calendly'



const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {


        marginTop: theme.spacing(3),


    },
    paper: {
        minHeight: '100vh',
    }

})
interface Props {
    classes: any
}

const Appointments: React.FC<Props> = ({ classes }) => {

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.toolbar} />

                <Typography color="secondary" component="h1" variant="h3">
                    Appointments
        </Typography>
                <Calendly />
            </Paper>
        </Container>
    );
}

export default withStyles(styles)(Appointments)
