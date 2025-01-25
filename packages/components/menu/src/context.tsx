import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef
} from "react";
import { Prefer } from "@brifui/core";
import { cn, pickChildrenByType } from "@brifui/core/utils";

import { Item } from "./item";
import { Track } from "./track";

export type TMenuContext = {
  onItemHover: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export const MenuContext = createContext<TMenuContext>({
  onItemHover: () => void 0
});

export type MenuRootProps = Prefer<
  {
    orientation?: "horizontal" | "vertical";
  },
  React.ComponentPropsWithRef<"div">
>;

export const Root = ({ children, className, ...props }: MenuRootProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const position = useRef<{
    y: number;
  }>({ y: 0 });

  const onItemHover = useCallback<TMenuContext["onItemHover"]>((e) => {
    if (!rootRef.current) return;
    const el = rootRef.current;
    const { y } = e.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => {
      el.style.setProperty(
        "--menu-vertical-top",
        `${y - position.current.y}px`
      );
    });
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const firstItem = rootRef.current.querySelector(
      'div[role="menuitem"]:first-child'
    );
    if (firstItem) {
      const { y } = firstItem.getBoundingClientRect();
      position.current.y = y;
    }
  }, []);

  const items = pickChildrenByType(children, Item);
  const tracks = pickChildrenByType(children, Track);

  return (
    <MenuContext.Provider value={{ onItemHover }}>
      <div
        ref={rootRef}
        role="menu"
        className={cn("relative", className)}
        {...props}
      >
        {items}
        {tracks}
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
