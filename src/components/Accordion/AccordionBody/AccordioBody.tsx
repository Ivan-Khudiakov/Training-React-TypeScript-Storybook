import React from "react";

type ItemType = {
    id: number
    title: string
}
type ItemsType = {
    items: Array<ItemType>

}
export function AccordionBody(props:ItemsType) {
    return (
        <ul>
            {props.items.map( i => (<li key={i.id} >{i.title}</li>))}
        </ul>
    )
}