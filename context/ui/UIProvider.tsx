//Defenine como lucira el estado de la aplicacion, no es lo mismo que el contexto el conteniene las properties. 

import { ReactNode, useReducer } from "react"
import { UiContext } from "./UIContext"
import { uiReducer } from ".";

export interface UIState {
    sidemenuOpen: boolean,
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}


export const UIProvider = ({ children }: { children: ReactNode }) => {

    //Indicamos como se manejaran los estados de la aplicacion
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }



    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    }
    return (
        <UiContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
}