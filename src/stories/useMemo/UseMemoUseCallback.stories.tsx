import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemoUseCallback'
}

// export const Example1 = () => {
//     const [a, setA] = useState<number>(1)
//     const [b, setB] = useState<number>(3)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResultA = 1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 100000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA *= i
//         }
//         return tempResultA
//     },[a])
//
//     for (let i = 1; i <= a; i++) {
//         let fake = 0
//         while (fake < 1000000) {
//             fake++
//             const fakeValue = Math.random()
//         }
//         resultA *= i
//     }
//     for (let i = 1; i <= b; i++) {
//         resultB *= i
//     }
//     return (
//         <>
//             <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))}/>
//             <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
//             <hr/>
//             <div>
//                 Result for a: {resultA}
//             </div>
//             <div>
//                 Result for b: {resultB}
//             </div>
//         </>
//     )
// }

// const UsersSecret = (props: { users: Array<string> }) => {
//     console.log("Users")
//     return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
// }
//
// const Users = React.memo(UsersSecret)

// export const HelpToReactMemo = () => {
//     console.log("HelpToReactMemo")
//     let [counter, setCounter] = useState(0)
//     let [users, setUsers] = useState(["Ivan", "Ekaterina", "Tim"])
//
//     let newUsersArray = useMemo (() => {
//         return users.filter(u => u.toLowerCase().indexOf("a") > -1)
//     },[])
//
//     return <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         {counter}
//         <Users users={newUsersArray}/>
//     </>
// }

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    let [counter, setCounter] = useState(0)
    let [books, setBooks] = useState(["React", "JS", "CSS"])

    const memoizedAddBook = useCallback (() => {
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    let newBooksArray = useMemo (() => {
        return books.filter(b => b.toLowerCase().indexOf("a") > -1)
    },[books])

    // let addBook = () => {
    //     let newBooks = [...books, "Angular" + new Date().getTime()]
    //     setBooks(newBooks)
    // }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newBooksArray} addBook={memoizedAddBook}/>
    </>
}
type BooksSecretPropsType = {
    books: Array<string>,
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    return <div>
        {props.books.map((b,i) => <div key={i}>{b}</div>)}
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)