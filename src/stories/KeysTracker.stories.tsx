import React, {useEffect, useState} from "react";

export default {
    title: 'Keys Tracker',
}

export const KeysTracker = () => {
    const [text, setText] = useState("")
    console.log("Component rendered with " + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) =>state + e.key)
        }

        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress", handler)
        }
    },[])

    return (
        <>
            Typed text: {text}
        </>
    )
}