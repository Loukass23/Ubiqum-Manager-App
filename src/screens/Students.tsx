import React, { useContext } from 'react';
import { UbiqumContext } from '../context/UbiqumContext';
import TableRender from '../components/TableRender';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { MUIDataTableColumn, MUIDataTableColumnDef } from 'mui-datatables';





const Students: React.FC = () => {

    const {
        students,
    } = useContext(UbiqumContext)



    return (
        <div>
            <TableRender data={students} title='Ubiqum Students List' />

        </div>
    )
}
export default Students