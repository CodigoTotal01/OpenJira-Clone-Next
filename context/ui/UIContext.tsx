import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  setIsAddingEntry: (isAdding: boolean) => void;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
