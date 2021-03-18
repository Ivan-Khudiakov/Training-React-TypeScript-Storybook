import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('Accordion on')

export const AccordionCollapsed = () => <Accordion onClick={x=>x} collapsed={true}  title={'Menu'}/>;
export const AccordionUnCollapsed = () => <Accordion onClick={x=>x} collapsed={false}  title={'Users'}/>;
export const ModChanging = () => {
    let [collapsed, setCollapsed] = useState(true)
    return <Accordion onClick={() => setCollapsed(!collapsed)} collapsed={collapsed}  title={'Menu'}/>;
}
