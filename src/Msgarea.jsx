import React from 'react';
import Text from './Text';
export default function Msgarea({msgList,name}) {
    console.log('msgList is: ' , msgList);
    return (
     
         <>
            {
                msgList.map( msg => 
                   <Text
                            msg = {msg}
                            userHandle = {name}
                       
                   />
                )
            }
        </>
    );
}