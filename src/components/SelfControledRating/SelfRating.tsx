import React, {useState} from "react";
import {Star} from "./Star/Star";
import {RatingTitle} from "./RatingTitle/RatingTitle";


export function Rating() {
    let [value, setValue] = useState(0)
    return (
        <div>
            <RatingTitle/>
            <div>
                <Star selected={value > 0}/><button onClick={() => {setValue(1)}}>1</button>
                <Star selected={value > 1}/><button onClick={() => {setValue(2)}}>2</button>
                <Star selected={value > 2}/><button onClick={() => {setValue(3)}}>3</button>
                <Star selected={value > 3}/><button onClick={() => {setValue(4)}}>4</button>
                <Star selected={value > 4}/><button onClick={() => {setValue(5)}}>5</button>
            </div>
        </div>
    )


}