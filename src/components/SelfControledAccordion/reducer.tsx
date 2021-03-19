export type StateType = {
    collapsed: boolean
}
type ActionType = {
    type: string
}
export const reducer = (state: StateType, action:ActionType):StateType => {
    //change state
    if (action.type === "TOGGLE-COLLAPSED") {
        let stateCopy = {...state}
        stateCopy.collapsed = !state.collapsed
        return stateCopy
    }
    return state
}