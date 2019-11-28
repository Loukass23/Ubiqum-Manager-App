import React, { useContext } from 'react';
import { UbiqumContext } from '../context/UbiqumContext';
import TableRender from '../components/TableRender';
import { Theme, createStyles, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { extractFilterProfiles, extractAllColumns } from '../config/columsFiltersProfiles'
import { AuthContext } from '../context/AuthContext';
import { MUIDataTableColumn } from 'mui-datatables';


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

const Allumni: React.FC<Props> = ({ classes }) => {


    const {
        allumni,
    } = useContext(UbiqumContext)
    const {
        userType, user
    } = useContext(AuthContext)

    const columns: MUIDataTableColumn[] = extractAllColumns(allumni)


    return (
        <Container className={classes.root}>
            <TableRender data={allumni} columns={columns} title='Ubiqum Allumni List' />

        </Container>
    )
}
export default withStyles(styles)(Allumni) 