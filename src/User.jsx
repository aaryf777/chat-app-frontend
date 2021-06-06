import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
export default function User({ userName }) {
    const status = {
        color : 'rgb(23, 238, 23)',
        fontSize : '9px'
    }
    return (
        <div className='user-box'>
            <FiberManualRecordIcon style={status} />
            <h2>{userName}</h2>
        </div>
    )

};