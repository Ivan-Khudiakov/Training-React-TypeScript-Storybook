import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect2 demo',
}

export const SetTimeoutExample = () => {
    let [fake, setFake] = useState(1)
    let [counter, setCounter] = useState(1)
    console.log("SetTimeoutExample")

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("setTimeout")
    //         document.title = counter.toString()
    //     }, 2000)
    // }, [counter])

    useEffect(() => {
        console.log("Tik" + counter)
        setInterval(() => {
            setCounter(state => state + 1)

        }, 1000)
    }, [])

    return <>
        {/*<button onClick={() => setFake(fake+1)}>+</button>*/}
        {/*{fake}*/}
        {/*<button onClick={() => setCounter(counter+1)}>+</button>*/}
        counter: {counter}  -----  fake: {fake}
    </>
}