import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordioBody";



export function Accordion() {
    let [collaps, setCollaps] = useState(false)
    return (
        <div>
            <AccordionTitle/>
            <button onClick={() => {setCollaps(!collaps)}}>toggle</button>
            {collaps && <AccordionBody/>}
        </div>
    )
}