import React, { createContext, useCallback, useContext, useRef } from "react";
import { cn } from "@brifui/core/utils";

export type TMenuContext = {
  onItemHover: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export const MenuContext = createContext<TMenuContext>({
  onItemHover: () => void 0
});

export const Root = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const onItemHover = useCallback<TMenuContext["onItemHover"]>((e) => {
    if (!rootRef.current) return;
    const el = rootRef.current;
    const { y } = e.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => {
      el.style.setProperty("--menu-vertical-top", `${y - 260.5}px`);
    });
  }, []);

  return (
    <MenuContext.Provider value={{ onItemHover }}>
      <div
        ref={rootRef}
        role="menu"
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext should be used within MenuContext.");
  }

  return context;
};
