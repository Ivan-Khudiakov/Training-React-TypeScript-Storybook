import React from "react";
import s from "./Star.module.css"


type StarProps = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

export function Star(props: StarProps) {
    return (
        <span className={s.star} onClick={() => props.setValue(props.value)}>
        {props.selected ? <b>* </b> : "* "}
    </span>
    )
}