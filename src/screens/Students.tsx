import React, { useContext } from 'react';
import { UbiqumContext } from '../context/UbiqumContext';
import TableRender from '../components/TableRender';
import { Theme, createStyles, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


const styles = (theme: Theme) => createStyles({
    toolbar: theme.mixins.toolbar,
    root: {

        [theme.breakpoints.down("xl")]: {
            paddingRight: 0,
            paddingLeft: 0
        },
    },
    paper: {
        minHeight: '100vh',
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            marginLeft: 0
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

const Students: React.FC<Props> = ({ classes }) => {


    const {
        students,
    } = useContext(UbiqumContext)



    return (
        <Container className={classes.root}>
            <TableRender data={students} title='Ubiqum Students List' />

        </Container>
    )
}
export default withStyles(styles)(Students) 