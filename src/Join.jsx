import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const nameInp = (e) => {
        setName(e.target.value);
    };
    const roomInp = (e) => {
        setRoom(e.target.value);
    };
  
    return (
        <div className='join-page'>
            <h2 className='app-title'>howzU</h2>
            <div className='signin-box'>
                <p className='join'>Join</p>
                <input className='name-box' type='text' placeholder='Enter your name' onChange={nameInp} />
                <input className='room-box' type='text' placeholder='Enter room name' onChange={roomInp} />
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='signin-btn' type = 'submit'>Enter</button>
                </Link>
            </div>
        </div>
    )
};