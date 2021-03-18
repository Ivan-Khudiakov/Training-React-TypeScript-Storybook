import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordioBody";

export type CollapsedType = boolean;

const onItemClick = (id: number) => {
    alert (`Item with ID ${id} clicked`)
}

type AccordionPropsType = {
    title: string
    collapsed: CollapsedType
    onClick: (collapsed:CollapsedType) => void
}
let items = [
    {id: 1, title: "News"},
    {id: 2, title: "Articles"},
    {id: 3, title: "Videos"},
    {id: 4, title: "About As"}
]

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {props.collapsed === true? <AccordionBody  items={items}/> : ""}
        </div>
    )
}