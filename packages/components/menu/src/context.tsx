import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Prefer } from "@brifui/core";
import { cn } from "@brifui/core/utils";

import { MenuSize } from "./shared";

export type MenuColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "destructive";

export type TMenuContext = {
  size: MenuSize;
  color: MenuColor;
  value: string | undefined;
  onItemClick: (
    value: string
  ) => (ev: React.MouseEvent<HTMLDivElement>) => void;
  onItemHover: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export const MenuContext = createContext<TMenuContext>({
  size: "md",
  color: "default",
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
    size?: MenuSize;
    color?: MenuColor;
  },
  React.ComponentPropsWithRef<"div">
>;

export const Root = ({
  value,
  defaultValue,
  onValueChange,
  children,
  className,
  size = "md",
  color = "primary",
  orientation = "vertical",
  ...props
}: MenuRootProps) => {
  const [innerValue, setInnerValue] = useState<string | undefined>(
    defaultValue
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverAnimationTimeoutId = useRef<number>(NaN);

  const isomorphicValue = useMemo(() => {
    if (value) return value;
    return innerValue;
  }, [value, innerValue]);
  const isomorphicSetValue = useMemo(() => {
    if (onValueChange) return onValueChange;
    return setInnerValue;
  }, [onValueChange]);

  const calculateHoverTrackPosition = useCallback((hoverEl: HTMLElement) => {
    const rootEl = rootRef.current;
    if (!rootEl) return;
    const rootRect = rootEl.getBoundingClientRect();
    const { x, y, width } = hoverEl.getBoundingClientRect();
    requestAnimationFrame(() => {
      rootEl.style.setProperty(
        "--hover-track-vertical-top",
        `${y - rootRect.y}px`
      );
      rootEl.style.setProperty(
        "--hover-track-vertical-left",
        `${x - rootRect.x}px`
      );
      rootEl.style.setProperty("--hover-track-width", `${width}px`);
      window.clearTimeout(hoverAnimationTimeoutId.current);
      hoverAnimationTimeoutId.current = window.setTimeout(() => {
        requestAnimationFrame(() => {
          rootEl.style.setProperty("--hover-track-transition-property", "all");
          rootEl.style.setProperty("--hover-track-opacity", "1");
        });
      }, 100);
    });
  }, []);
  const calculateActiveTrackPosition = useCallback((activeEl: HTMLElement) => {
    const rootEl = rootRef.current;
    if (!rootEl) return;
    const rootRect = rootEl.getBoundingClientRect();
    const { x, y, width } = activeEl.getBoundingClientRect();
    requestAnimationFrame(() => {
      rootEl.style.setProperty(
        "--active-track-vertical-top",
        `${y - rootRect.y}px`
      );
      rootEl.style.setProperty(
        "--active-track-vertical-left",
        `${x - rootRect.x}px`
      );
      rootEl.style.setProperty("--active-track-width", `${width}px`);
      setTimeout(() => {
        rootEl.style.setProperty("--active-track-opacity", "1");
        rootEl.style.setProperty("--active-track-transition-property", "all");
      }, 100);
    });
  }, []);

  const paintActiveTrack = useCallback(
    (el?: HTMLElement | null) => {
      if (!rootRef.current || !isomorphicValue) return;
      const activeEl =
        el ||
        rootRef.current.querySelector('[role="menuitem"][data-active="true"]');
      if (activeEl instanceof HTMLElement)
        calculateActiveTrackPosition(activeEl);
    },
    [calculateActiveTrackPosition, isomorphicValue]
  );
  const paintHoverTrack = useCallback(
    (el: HTMLElement) => {
      calculateHoverTrackPosition(el);
    },
    [calculateHoverTrackPosition]
  );

  /**
   * Item
   */
  const onItemClick = useCallback<TMenuContext["onItemClick"]>(
    (value: string) => (e) => {
      if (e.currentTarget.ariaDisabled === "true") return;
      isomorphicSetValue(value);
    },
    [isomorphicSetValue]
  );
  const onItemHover = useCallback<TMenuContext["onItemHover"]>(
    (e) => {
      paintHoverTrack(e.currentTarget);
    },
    [paintHoverTrack]
  );

  /**
   * Root
   */
  const onRootMouseLeave = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.style.setProperty("--hover-track-opacity", "0");
      window.clearTimeout(hoverAnimationTimeoutId.current);
      hoverAnimationTimeoutId.current = window.setTimeout(() => {
        el.style.setProperty("--hover-track-transition-property", "none");
      }, 100);
    });
  }, []);

  useLayoutEffect(() => {
    if (isomorphicValue) {
      paintActiveTrack();
    }
  }, [paintActiveTrack, isomorphicValue]);

  return (
    <MenuContext.Provider
      value={{
        color,
        size,
        value: isomorphicValue,
        onItemHover,
        onItemClick
      }}
    >
      <div
        ref={rootRef}
        role="menu"
        aria-orientation={orientation}
        className={cn("relative flex flex-col gap-1", className)}
        {...props}
        onMouseLeave={onRootMouseLeave}
      >
        <div />
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
