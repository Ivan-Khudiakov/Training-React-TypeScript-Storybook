import React, {useEffect, useState} from "react"
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


type PropsType ={
 mode: "digital" | "analog"
}
export type ClockPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const TimeInterval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        //Останавливает setInterval когда компонент умирает, если этого не делать, то интевал продолжает работать.
        //Обязательно это делать!
        return () => {
            clearInterval(TimeInterval)
        }
    }, [])

    return (
        <div>
            {
                props.mode === "digital"
                    ? <DigitalClock date={date}/>
                    : <AnalogClock date={date}/>
            }

        </div>
    )
}




