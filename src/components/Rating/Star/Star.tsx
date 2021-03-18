import React from "react";
import {RatingValueType} from "../Rating";

type StarPropsType = {
    onClick: (value:RatingValueType) => void
    selected: boolean
    value: RatingValueType
}

export function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected === true? <b>star </b>: "star "}
        </span>
    )
}