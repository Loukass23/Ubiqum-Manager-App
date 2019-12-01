import React from 'react';
import Radium from 'radium';
import { StyleRules } from '@material-ui/styles';

const toolTipStyles: StyleRules = {
    '.tooltip': {
        border: 'solid silver 1px',
        position: 'fixed',
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '10px'
    }
};

const ToolTip: React.FC<Props> = (props) => (
    <div className="tooltip-container">
        <Radium.Style

            scopeSelector=".tooltip-container"
            rules={toolTipStyles} />
        <div className="tooltip" style={{ top: props.top, left: props.left }}>
            {props.children}
        </div>
    </div>
);

interface Props {
    left: string,
    top: string,
    children: React.ReactNode
};

export default ToolTip;