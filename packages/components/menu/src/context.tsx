import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { Prefer } from "@brifui/core";
import { cn, pickChildrenByType } from "@brifui/core/utils";

import { Item } from "./item";
import { Track } from "./track";

export type TMenuContext = {
  value: string | undefined;
  onItemClick: (
    value: string
  ) => (ev: React.MouseEvent<HTMLDivElement>) => void;
  onItemHover: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export const MenuContext = createContext<TMenuContext>({
  value: undefined,
  onItemClick: () => () => void 0,
  onItemHover: () => void 0
});

export type MenuRootProps = Prefer<
  {
    orientation?: "horizontal" | "vertical";
    onValueChange?: (value: string) => void;
    value?: string;
    defaultValue?: string;
  },
  React.ComponentPropsWithRef<"div">
>;

export const Root = ({
  value: outerVaue,
  defaultValue,
  onValueChange = () => void 0,
  children,
  className,
  ...props
}: MenuRootProps) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const position = useRef<{
    y: number;
  }>({ y: 0 });

  const onItemClick = useCallback<TMenuContext["onItemClick"]>(
    (value: string) => (e) => {
      setValue(value);
      const rootEl = rootRef.current;
      onValueChange(value)
      if (e.target instanceof HTMLElement && rootEl) {
        const { y } = e.target.getBoundingClientRect();
        requestAnimationFrame(() => {
          rootEl.style.setProperty(
            "--active-track-vertical-top",
            `${y - position.current.y}px`
          );
          setTimeout(() => {
            rootEl.style.setProperty("--active-track-opacity", "1");
            rootEl.style.setProperty("--active-track-transition-property", "all");
          })
        });
      }
    },
    [onValueChange]
  );

  const onItemHover = useCallback<TMenuContext["onItemHover"]>((e) => {
    if (!rootRef.current) return;
    const el = rootRef.current;
    const { y } = e.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => {
      el.style.setProperty(
        "--hover-track-vertical-top",
        `${y - position.current.y}px`
      );
    });
  }, []);

  const onRootMouseEnter = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    setTimeout(() => {
      requestAnimationFrame(() => {
        el.style.setProperty("--hover-track-transition-property", "all");
        el.style.setProperty("--hover-track-opacity", "1");
      });
    }, 100);
  }, []);
  const onRootMouseLeave = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.style.setProperty("--hover-track-opacity", "0");
      setTimeout(() => {
        el.style.setProperty("--hover-track-transition-property", "none");
      }, 100);
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
    <MenuContext.Provider value={{ value, onItemHover, onItemClick }}>
      <div
        ref={rootRef}
        role="menu"
        className={cn("relative flex flex-col gap-1", className)}
        {...props}
        onMouseEnter={onRootMouseEnter}
        onMouseLeave={onRootMouseLeave}
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
