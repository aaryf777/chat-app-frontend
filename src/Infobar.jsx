import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link } from 'react-router-dom';
export default function Infobar({ roomName, typingStatus, displayUsers }) {


    const status = {
        color: 'rgb(23, 238, 23)',
        fontSize: '11px'
    }
    return (
        <>
            <div className='infobar'>
                <div className='left-cont'>
                    <a href = '/'><h2><ArrowBackIcon /></h2></a>
                </div>
                <div className='right-cont'>
                    <div className='inner-right-cont'>
                        <FiberManualRecordIcon style={status} />
                        <h2>{roomName}</h2>
                    </div>
                    <p>{typingStatus}</p>
                </div>
                <div className='info-btnbox'>
                    <button onClick={displayUsers}>Active</button>
                </div>


            </div>
        </>
    )
}