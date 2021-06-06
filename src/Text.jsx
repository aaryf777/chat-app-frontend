import React from 'react';

export default function Text({ msg: { user, text }, userHandle }) {
    let isSendByCurrUser = false;
    const currName = userHandle.trim().toLowerCase();
    if (user === currName) {
        isSendByCurrUser = true;
    }
    console.log('isSendByCurrUser is', isSendByCurrUser);
    console.log('user,text and useHandle is', user, text, userHandle);
    return (
        <>
        {(user === 'admin') ?
            <div className='admin-msg'>
                <p className='sendername'>{user}</p>
                <p className='text color-admin'>{text}</p>
            </div>
            :
            isSendByCurrUser ?
                <div class='send-msg'>
                    <p className='sendername'>You</p>
                    <p className='text color-dark'>{text}</p>

                </div>
                :
                <div className='rcv-msg'>
                    <p className='sendername'>{user}</p>
                    <p className='text color-light'>{text}</p>
                </div>
        }
        </>
    )
};