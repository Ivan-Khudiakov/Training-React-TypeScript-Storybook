import React, {useReducer, useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordioBody";
import {reducer} from "./reducer";


type SelfAccordionProps = {
    title: string
}

export function SelfAccordion(props:SelfAccordionProps) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {dispatch({type: "TOGGLE-COLLAPSED"})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}