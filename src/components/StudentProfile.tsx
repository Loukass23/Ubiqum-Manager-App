import React from 'react'
import { Grid, Typography, Theme, createStyles, withStyles } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
    root: {

        marginTop: theme.spacing(4),
        [theme.breakpoints.down("xl")]: {
            paddingRight: 0,
            paddingLeft: 0
        },
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    responsiveField: {
        width: '70vw',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    responsiveFieldSide: {
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },

    bigAvatar: {
        width: '20vw',
        height: '20vw',
        margin: 'auto',

    },
    initials: {
        width: '20vw',
        height: '20vw',
        margin: 'auto',
        fontSize: '8vw',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    profile: {
        position: 'relative',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0
        },
    },
    text: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
    },
    avatar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(2),
        },

    },


})


interface Props {
    student: Student,
    classes: any

}

const StudentProfile: React.FC<Props> = ({ student, classes }) => {
    console.log('student :', student);
    const { startDate, cohort } = student
    return (

        <Grid container className={classes.root}>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    start date: {startDate}
                </Typography>

            </Grid>
            <Grid item xs={12} md={6} >
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    cohort : {cohort}
                </Typography>

            </Grid>
        </Grid>

    )
}

export default withStyles(styles)(StudentProfile)
