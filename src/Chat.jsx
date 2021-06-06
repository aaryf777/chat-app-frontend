import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobar from './Infobar';
import Sendmsg from './Sendmsg';
import Msgarea from './Msgarea';
import Onlineuserslist from './Onlineuserslist';
let socket;

export default function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [msg, setMsg] = useState('');
    const [message, setMessage] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const [displaystyle, setDisplaystyle] = useState('none');


    const ENDPOINT = 'https://howzu-chat-app.herokuapp.com/';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, () => {

        });


    }, [ENDPOINT, location.search]);
    useEffect(() => {

        socket.on('msg', newMessage => {
            setMessage([...message, newMessage]);
        });
        socket.on('display', onlineUsersList => {
            console.log('online user list is: ', onlineUsersList);
            setOnlineUsers(onlineUsersList);
        });

    }, [message, onlineUsers]);
    const sendMsg = (e) => {
        if (msg) {
            socket.emit('send', msg);
            setMsg('');
        }
        socket.emit('notyping', socket.id);

        e.preventDefault();
    }
    if (msg.length > 0) {
        socket.emit('typing', socket.id);
    }



    useEffect(() => {
        socket.on('active', typingMsg => {
            setTypingStatus(typingMsg);
        })
    }, [msg.length > 0]);
    useEffect(() => {
        socket.on('inactive', typingMsg => {
            setTypingStatus(typingMsg);
        })
    }, [msg.length === 0]);

    const displayUsers = (e) => {
        displaystyle == 'none' ? setDisplaystyle('') : setDisplaystyle('none');
        e.preventDefault();
    }

    return (
        <div className='chat-page'>
            <div className='info-box'>
                <Infobar
                    roomName={room}
                    typingStatus={typingStatus}
                    displayUsers={displayUsers}
                />
            </div>
            <div className='msg-box'>
                <Msgarea
                    msgList={message}
                    name={name}
                />
            </div>
            <div className='online-users' style={{ display: displaystyle }}>
                <Onlineuserslist
                    displayList={onlineUsers}
                />
            </div>
            <div className='sendmsg-box'>
                <Sendmsg
                    msg={msg}
                    setMsg={setMsg}
                    sendMsg={sendMsg}
                />
            </div>

            


        </div>
    )
};