import React from "react";

type AccordionTitleProps = {
    title: string
    onClick: () => void
}
export function AccordionTitle(props:AccordionTitleProps) {
    return <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
}