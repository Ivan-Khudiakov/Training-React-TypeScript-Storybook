import React, {useState} from "react";
import {Accordion} from "../components/Accordion/Accordion";

export default {
    title: 'React.memo demo',
}

const NeMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const ExampleOne = () => {
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(["Ivan", "Ekaterina", "Tima"])

    const addUser = () => {
        const usersCopy = [...users, "Galina"]
        setUsers(usersCopy)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NeMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}