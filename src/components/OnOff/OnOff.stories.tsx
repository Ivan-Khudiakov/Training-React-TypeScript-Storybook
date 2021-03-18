import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('On or Off')

export const OnMode = () => <OnOff on={true} onClick={x=>x}/>;
export const OffMode = () => <OnOff on={false} onClick={x=>x}/>;
export const ModChanging = () => {
    let [on, setOn] = useState(true)
    return <OnOff on={on} onClick={() => setOn(!on)}/>;
}
