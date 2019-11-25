import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, Button } from '@material-ui/core';
import Calendly from '../components/Calendly'
import { UbiqumContext } from '../context/UbiqumContext';

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

const Appointments: React.FC<Props> = ({ classes }) => {
    const {
        mentors,
    } = useContext(UbiqumContext)
    const mentorsByCity = mentors.filter(mentor => mentor.city === 'Berlin')
    const otherMentors = mentors.filter(mentor => mentor.city !== 'Berlin')
    const [showAll, setShowAll] = useState(false)
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.toolbar} />

                <Typography className={classes.title} color="secondary" component="h1" variant="h3">
                    Appointments
        </Typography>
                <Typography color="secondary" component="h5" variant="h5">
                    Mentors in {mentorsByCity[0].city}
                </Typography>

                <Calendly mentors={mentorsByCity} />

                {!showAll ?
                    <Button onClick={() => setShowAll(!showAll)} variant="contained" color="primary">
                        Show All Mentors
      </Button>
                    :
                    <React.Fragment>
                        <Typography className={classes.title} color="secondary" component="h5" variant="h5">
                            All mentors
                                    </Typography>
                        <Calendly mentors={otherMentors} />
                    </React.Fragment>
                }
            </Paper>
        </Container>
    );
}

export default withStyles(styles)(Appointments)
