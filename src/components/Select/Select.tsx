import React, {useState} from "react";
import styles from "./Select.module.css"

type SelectItemType = {
    value: any
    title: string
}
type SelectPropsType = {
    items: Array<SelectItemType>
    value?: any
    onChange: (value: any) => void
}
type ParentValueType = "Moscow" | "Kiev" | "Minsk" | "London"

const SelectItems = [
    {id: 1, title: "Moscow"},
    {id: 2, title: "Kiev"},
    {id: 3, title: "Minsk"},
    {id: 4, title: "London"},
]

export function Select (props:SelectPropsType) {
    let [active, setActive] = useState(true)
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = () => setActive(!active)

    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div key={i.value} onClick={() => props.onChange(i.value)}>{i.title}</div>)}
                </div>
            }

        </div>
    )
}