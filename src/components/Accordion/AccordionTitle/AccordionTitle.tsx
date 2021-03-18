import React from "react";
import {CollapsedType} from "../Accordion";

type AccordionTitleProps ={
    title: string
    collapsed: boolean
    onClick: (collapsed:CollapsedType) => void
}
export function AccordionTitle(props:AccordionTitleProps) {
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}