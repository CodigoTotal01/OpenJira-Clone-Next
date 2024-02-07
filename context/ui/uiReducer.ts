import { UIState } from "./"
//Es como reduc
type UIActionType =
    | { type: "UI - Open Sidebar" }
    | { type: "UI - Close Sidebar" }

//Funcion pura
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state,
                sidemenuOpen: true,
            }

        case "UI - Close Sidebar":
            return {
                ...state,
                sidemenuOpen: false,
            }

        default:
            return state
    }
}