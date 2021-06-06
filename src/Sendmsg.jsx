import React from 'react';

export default function Sendmsg({msg, setMsg, sendMsg}) {
    console.log('msg in sendmsg is:', msg);
    return (
        <div className = 'form-box'>
        <form className = 'form'>
            <input className = 'input' type = 'text' value = {msg}
            placeholder = 'Type a message'
            onChange = {e => {
                setMsg(e.target.value)
            }}
            onKeyPress = {e => e.key === 'Enter' ? sendMsg(e) : null}
            />
        </form>
        <button className = 'send' onClick = {e => sendMsg(e)}>Send</button>
        </div>
    )
};