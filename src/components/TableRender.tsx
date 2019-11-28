import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import React from 'react';
import { Theme, createStyles, withStyles } from "@material-ui/core";
import CustomToolbarSelect from "./CustomToolbarSelect";

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
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
        customToolbarSelect: renderCustomToolbar,
        // onRowsDelete: onClick
    };
}
const renderCustomToolbar: any = (selectedRows: { data: { index: number; dataIndex: number; }[]; lookup: { [key: number]: boolean; }; },
    displayData: { data: any[]; dataIndex: number; }[],
    setSelectedRows: (rows: number[]) => void) =>

    (
        <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows} />
    )


interface Props {
    data: Array<Object>,
    classes: any,
    title: string,
    columns: MUIDataTableColumnDef[]

}
const TableRender: React.FC<Props> = ({ data, classes, title, columns }) => {
    const option: MUIDataTableOptions = getOptions(title)
    // const columns: MUIDataTableColumnDef[] = extractColumns(data)
    // const columns: MUIDataTableColumnDef[] = extractAMentorColumns()

    // function(rowsDeleted: object(lookup: { [dataIndex]: boolean }, data: arrayOfObjects: { index: number, dataIndex: number })) => void OR false

    return (
        <React.Fragment>
            <div className={classes.toolbar} />
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={option}
            />
        </React.Fragment>
    )
}

export default withStyles(styles)(TableRender)