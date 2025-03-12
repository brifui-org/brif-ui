"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from "react";

const MenuContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: () => void 0
});

export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
