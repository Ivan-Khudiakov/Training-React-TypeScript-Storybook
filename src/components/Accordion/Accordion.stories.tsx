import React, {useState} from 'react'

import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}



// export const AccordionCollapsed = () => <Accordion onClick={callback} collapsed={true}  title={'Menu'}/>;
// export const AccordionUnCollapsed = () => <Accordion onClick={x=>x} collapsed={false}  title={'Users'}/>;
export const ModChanging = () => {
    let [collapsed, setCollapsed] = useState(true)
    return <Accordion onClick={() => setCollapsed(!collapsed)} collapsed={collapsed}  title={'Menu'}/>;
}
