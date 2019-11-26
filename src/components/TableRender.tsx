import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import React from 'react';



import { Theme, createStyles, withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    paper: {
        color: theme.palette.secondary.light
    }


})

// const getMuiTheme = (theme: Theme) => createMuiTheme({
//     ...theme,
//     overrides: {
//         MUIDataTableBodyCell: {
//             root: {
//                 backgroundColor: "#FF0000"
//             }
//         }
//     }
// })

const extractColumns = (data: Array<Object>) => {
    const dataItem = data[0]

    const keys = Object.keys(dataItem) as (keyof Object)[]
    const columns: MUIDataTableColumn[] = keys.map((key) => {
        console.log(typeof (dataItem[key]));
        if (typeof (dataItem[key]) !== 'object') {

            const upper = key.replace(/^\w/, c => c.toUpperCase());
            const label = upper.replace(/([a-z])([A-Z])/g, '$1 $2');

            const col: MUIDataTableColumn = {
                name: key,
                label: label,
                options: {
                    filter: true,
                    sort: true,
                }
            }
            return col
        }
        else {
            const col: MUIDataTableColumn = {
                name: '',
                label: '',
                options: {
                    filter: true,
                    sort: true,
                }
            }
            return col
        }
    })
        .filter(key => key.name !== '')
    return columns
}

const getOptions = (title: string) => {

    return {
        // filterType: 'dropdown',
        pagination: false,
        downloadOptions: {
            filename: `${title}.csv`,
            separator: ',',
            filterOptions: {
                useDisplayedColumnsOnly: true,
                useDisplayedRowsOnly: true
            }

        },
    };
}

interface Props {
    data: Array<Object>,
    classes: any,
    title: string

}
const TableRender: React.FC<Props> = ({ data, classes, title }) => {
    const option: MUIDataTableOptions = getOptions(title)
    const columns: MUIDataTableColumnDef[] = extractColumns(data)

    return (
        <React.Fragment>
            <div className={classes.toolbar} />
            {/* <MuiThemeProvider theme={getMuiTheme()}> */}
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={option}
            />
            {/* </MuiThemeProvider> */}
        </React.Fragment>
    )
}

export default withStyles(styles)(TableRender)