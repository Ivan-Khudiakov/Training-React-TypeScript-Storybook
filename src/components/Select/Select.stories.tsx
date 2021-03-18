import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";



export default {
    title: 'Select',
    component: Select,
}

export const CustomSelectWithValue = () =>
        <Select onChange={action("Value changed")}
                items={[{value: "1", title: "Moscow"}, {value: "2", title: "Kiev"}, {value: "3", title: "Minsk"}, {value: "4", title: "London"}]}
                value={"2"}
        />;

export const CustomSelectWithoutValue = () =>
    <Select onChange={action("Value changed")}
            items={[{value: "1", title: "Moscow"}, {value: "2", title: "Kiev"}, {value: "3", title: "Minsk"}, {value: "4", title: "London"}]}
    />;
