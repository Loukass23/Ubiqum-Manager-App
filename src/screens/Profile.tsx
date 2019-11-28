import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Button, Fab } from '@material-ui/core';
import { minHeight, breakpoints } from '@material-ui/system';
import { AuthContext } from '../context/AuthContext';
import UserProfile from '../components/UserProfile';
import { useParams } from 'react-router-dom';
import { UbiqumContext } from '../context/UbiqumContext';
import MentorProfile from '../components/MentorProfile';
import StudentProfile from '../components/StudentProfile';
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            marginLeft: 0,
            paddingRight: 0,
            paddingLeft: 0
        },

    },

    paper: {
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            marginLeft: 0
        },

        minHeight: '100vh',
        paddingBottom: theme.spacing(3),

    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),

    },
    back: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
        marginLeft: 20,
        backgroundColor: theme.palette.primary.light
    }

})
interface Props {
    classes: any,
}

const Profile: React.FC<Props> = ({ classes }) => {
    const { user, userType } = useContext(AuthContext)
    const { allUsers, mentors, students } = useContext(UbiqumContext)
    const { id } = useParams()
    let history = useHistory();

    const foundMentor: Mentor = mentors.filter((m: Mentor) => m.id == id)[0]
    const foundStudent: Student = students.filter((s: Student) => s.id == id)[0]
    const found: User = allUsers.filter((u: User) => u.id == id)[0]
    // const found: User = allUsers.find((u: User) => u.id == id)

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.toolbar} />
                <Fab className={classes.back} onClick={() => history.goBack()} color="primary" aria-label="edit">
                    <ArrowBackIosIcon />
                    <ArrowBackIosIcon />
                </Fab>

                <UserProfile user={found} userType={userType} />
                {foundStudent && <StudentProfile student={foundStudent} />}
                {foundMentor && <MentorProfile mentor={foundMentor} />}



            </Paper>
        </Container>
    );
}

export default withStyles(styles)(Profile)
