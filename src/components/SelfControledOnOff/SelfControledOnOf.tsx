import React, {useState} from 'react'
import s from './OnOffBtn.module.css'

export function SelfControledOnOff() {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        backgroundColor: on ? 'green' : 'white',
        marginLeft: '10px',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        backgroundColor: on ? 'white' : 'red',
        marginLeft: '10px',

    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red',
    }
    return (
        <div className={s.onoff}>
            <div style={onStyle} onClick={() =>{setOn(true)}}>on</div>
            <div style={offStyle} onClick={() =>{setOn(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}