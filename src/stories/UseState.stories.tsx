import React, {useState} from "react";


export default {
    title: 'useState demo',
}
let generateData = () => {
    console.log ("generateData")
    return 3254564
}

export const ExampleOne = () => {
    console.log ("Example1")

    // const initValue = useMemo(generateData,[]) ===>>> не будет вызывать generateData при каждом вызове setCounter
    // то же самое если передать функцию напрямую в useState
    let [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}