import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Button } from '@material-ui/core';
import { minHeight, breakpoints } from '@material-ui/system';
import { AuthContext } from '../context/AuthContext';
import UserProfile from '../components/UserProfile';
import { confluenceContentOffine } from '../offlineDatas/confluenceContentOffline'


const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("xl")]: {
            paddingRight: 0,
            paddingLeft: 0
        },

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
    const { user, userType } = useContext(AuthContext)
    console.log('confluenceContentOffine :', confluenceContentOffine);
    const foo = confluenceContentOffine.filter(p => p.conflChildrenId.length !== 0)
    const moo = confluenceContentOffine.filter(p => p.conflChildrenId.length === 0)
    console.log('foo :', foo);

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.toolbar} />
                {foo.map(c => (
                    <div>

                        <Typography className={classes.title} color="primary" component="h5" variant="h5">
                            {c.title}
                        </Typography>

                        {c.conflChildrenId.length !== 0 && c.conflChildrenId.map(id => {
                            let child = moo.find(f => f.conflPageId === id)
                            if (child)
                                return (
                                    <div>
                                        <Typography className={classes.title} color="secondary" component="h6" variant="h6">
                                            {child.title}
                                        </Typography>
                                        <div dangerouslySetInnerHTML={{ __html: child.content }} />
                                    </div>

                                )
                        })}
                    </div>

                ))}
                {/* <div dangerouslySetInnerHTML={{ __html: foo }} /> */}

                {/* <UserProfile user={user} userType={userType} /> */}


            </Paper>
        </Container>
    );
}

export default withStyles(styles)(Settings)
