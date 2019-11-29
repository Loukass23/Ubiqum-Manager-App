import React, { useContext } from 'react';
import { UbiqumContext } from '../context/UbiqumContext';
import TableRender from '../components/TableRender';
import { Theme, createStyles, Container, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { extractFilterProfiles } from '../config/columsFiltersProfiles'
import { AuthContext } from '../context/AuthContext';
import { MUIDataTableColumn } from 'mui-datatables';
import Chart from '../components/Chart';


const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {

        // [theme.breakpoints.down("xl")]: {
        //     paddingRight: 0,
        //     paddingLeft: 0
        // },
    },
    chart: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(8),

    },
    paper: {
        minHeight: '100vh',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            width: '100wh'
        },
    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
})

interface Props {
    classes: any
}

const Dashboard: React.FC<Props> = ({ classes }) => {


    const {
        students,
    } = useContext(UbiqumContext)
    const {
        userType, user
    } = useContext(AuthContext)

    const columns: MUIDataTableColumn[] = extractFilterProfiles(userType, user)


    return (
        <Container className={classes.root}>
            <div className={classes.toolbar} />

            <Paper className={classes.paper}>
                <Typography className={classes.title} color="primary" component="h1" variant="h3">
                    Dashboard
        </Typography>
                <Typography className={classes.title} color="secondary" component="h5" variant="h5">
                    Total Students
        </Typography>
                <div className={classes.chart}>
                    <Chart />
                </div>
            </Paper>

            {/* <TableRender data={students} columns={columns} title='Ubiqum Students List' /> */}

        </Container>
    )
}
export default withStyles(styles)(Dashboard) 