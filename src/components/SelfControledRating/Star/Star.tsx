import React from "react";

type StarProps = {
    selected: boolean
}

export function Star(props: StarProps) {
    if (props.selected === true) {
        return (
            <span><b>* </b></span>
        )
    }
    return (
        <span>* </span>

    )
}