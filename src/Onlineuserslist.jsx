import React, { useState } from 'react';
import User from './User';

export default function Onlineuserslist({displayList}) {
    
    console.log('displayList is: ',displayList);
    return (
        <div className = 'user-list' >
            {
                displayList.map(user => 
                    <User userName = {user.name}/>
                )
            }
        </div>
    )
};