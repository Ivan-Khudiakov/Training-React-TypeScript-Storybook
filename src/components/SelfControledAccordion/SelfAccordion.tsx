import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordioBody";


type SelfAccordionProps = {
    title: string
}
export function SelfAccordion(props:SelfAccordionProps) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}