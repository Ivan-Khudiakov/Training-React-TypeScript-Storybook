import React from "react"
import {ClockPropsType} from "./Clock";


export let plusZero = (number: number) => number < 10 ? "0" + number : number

export const DigitalClock: React.FC<ClockPropsType> = ({date}) => {
    return <>
        <span>{date.getHours()}</span>:
        <span>{plusZero(date.getMinutes())}</span>:
        <span>{plusZero(date.getSeconds())}</span>
    </>
}