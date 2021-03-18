import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";



export default {
    title: 'Select',
    component: Select,
}

export const CustomSelectWithValue = () => {
    const [value, setValue] = useState("2")
    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Moscow"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Minsk"},
                    {value: "4", title: "London"}
                    ]}
        />
    )
}
export const CustomSelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Moscow"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Minsk"},
                    {value: "4", title: "London"}
                ]}
        />
    )
}

