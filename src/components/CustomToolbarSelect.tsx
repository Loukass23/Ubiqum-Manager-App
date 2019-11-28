import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core/styles";
import EmailIcon from '@material-ui/icons/Email';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Link } from "react-router-dom";

const defaultToolbarSelectStyles = {
    iconButton: {
    },
    iconContainer: {
        marginRight: "24px",
    },
    inverseIcon: {
        transform: "rotate(90deg)",
    },
};
interface Props {
    classes: any,
    selectedRows: { data: { index: number; dataIndex: number; }[]; lookup: { [key: number]: boolean; }; },
    displayData: { data: any[]; dataIndex: number; }[],
    setSelectedRows: (rows: number[]) => void
}
const CustomToolbarSelect: React.FC<Props> = ({ classes, selectedRows, displayData, setSelectedRows }) => {
    const handleClickInverseSelection = () => {
        const nextSelectedRows = displayData.reduce((nextSelectedRows, _, index: number) => {
            if (!selectedRows.data.find(selectedRow => selectedRow.index === index)) {
                // nextSelectedRows.push(index);
            }

            return nextSelectedRows;
        }, []);

        setSelectedRows(nextSelectedRows);
    };

    const handleClickDeselectAll = () => {
        setSelectedRows([]);
    };

    const handleClickBlockSelected = () => {
        console.log(`block users with dataIndexes: ${selectedRows.data.map(row => row.dataIndex)}`);
    };

    const { data } = selectedRows


    const getID = (index: number) => {
        console.log('data :', displayData[index]);
        const idCol = displayData[index].data.length - 1
        return displayData[index].data[idCol]
    }

    return (
        <div className={classes.iconContainer}>
            {data.length === 1 && <Tooltip title={"Profile"}>
                <IconButton className={classes.iconButton}
                    component={Link} to={`/profile/${getID(data[0].index)}`}
                >
                    <PermIdentityIcon className={classes.icon} />
                </IconButton>
            </Tooltip>}
            <Tooltip title={"Deselect ALL"}>
                <IconButton className={classes.iconButton} onClick={handleClickDeselectAll}>
                    <IndeterminateCheckBoxIcon className={classes.icon} />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Inverse selection"}>
                <IconButton className={classes.iconButton} onClick={handleClickInverseSelection}>
                    <CompareArrowsIcon className={[classes.icon, classes.inverseIcon].join(" ")} />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Email List"}>
                <IconButton className={classes.iconButton} onClick={handleClickBlockSelected}>
                    <EmailIcon className={classes.icon} />
                </IconButton>
            </Tooltip>
        </div>
    );

}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);