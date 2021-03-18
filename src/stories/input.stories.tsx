import React, {ChangeEvent, useRef, useState} from 'react'
// import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledInput',
    // component: SelfRating,
}

export const UncontrolledInput = () => {return <input/>;}
export const TrackValueUncontrolledInput = () => {
    let [value, setValue] = useState('')
    const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={OnChange}/> -{value}-</>;
}
export const GetValueUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <> <input ref={inputRef}/><button onClick={save}>save</button> actual value-{value}</>;
}
export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue}  onChange={onChange}/>
}

export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>
    </select>
}
export const FixedControlledInput = () => {return <input value={'it-incubator'}/>;}
