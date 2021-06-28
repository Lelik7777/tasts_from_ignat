import React from 'react'
import {MessageDateType} from './HW1';
import s from './Message.module.css';

const Message: React.FC<MessageDateType> = ({avatar, message, name, time}) => {
    return (
        <div className={s.message}>
            <div><img src={avatar} alt="avatar"/></div>
            <div className={s.corner}></div>
            <div className={s.textMessage}>
                <h2>{name}</h2>
                <p>{message}</p>
                <h3>{time}</h3>
            </div>
        </div>
    )
}

export default Message
