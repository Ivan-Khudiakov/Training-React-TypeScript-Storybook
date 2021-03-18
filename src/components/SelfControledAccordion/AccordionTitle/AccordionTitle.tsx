import React from "react";

type AccordionTitleProps ={
    title: string
}
export function AccordionTitle(props:AccordionTitleProps) {
    return <h3>{props.title}</h3>
}