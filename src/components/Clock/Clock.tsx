import React, {useEffect, useState} from "react"


type PropsType ={

}

let plusZero = (number: number) => number < 10 ? "0" + number : number

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
            <span>{date.getHours()}</span>
            :
            <span>{plusZero(date.getMinutes())}</span>
            :
            <span>{plusZero(date.getSeconds())}</span>
        </div>
    )
}