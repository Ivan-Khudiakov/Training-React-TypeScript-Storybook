import React from 'react'

export type OnType = boolean;
type OnOffPropsType = {
    on: OnType
    onClick:(on: OnType) => void
}
export function OnOff(props:OnOffPropsType) {


    const onStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        marginLeft: '10px',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        marginLeft: '10px',

    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        border: '2px solid black',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red',
    }
    return (
        <div>
            <div style={onStyle} onClick={() =>{props.onClick(!props.on)}}>on</div>
            <div style={offStyle} onClick={() =>{props.onClick(!props.on)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}