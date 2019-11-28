import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import classes from '*.module.css'

interface Props {
    mentor: Mentor,

}

const MentorProfile: React.FC<Props> = ({ mentor }) => {
    console.log('mentor :', mentor);
    return (
        <React.Fragment>
            {/* <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {startDate}
                </Typography>

            </Grid>
            <Grid item xs={12} md={6} >
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {cohort}
                </Typography>

            </Grid> */}
        </React.Fragment>
    )
}

export default MentorProfile
