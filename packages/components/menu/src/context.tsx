import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
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
  onSectionClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

export const MenuContext = createContext<TMenuContext>({
  size: "md",
  color: "default",
  value: undefined,
  onItemClick: () => () => void 0,
  onItemHover: () => void 0,
  onSectionClick: () => void 0
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
  value: outerVaue,
  defaultValue,
  onValueChange = () => void 0,
  children,
  className,
  size = "md",
  color = "default",
  orientation = "vertical",
  ...props
}: MenuRootProps) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);

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

  /**
   * Item
   */
  const onItemClick = useCallback<TMenuContext["onItemClick"]>(
    (value: string) => (e) => {
      e.preventDefault()
      if (e.currentTarget.ariaDisabled === 'true') return
      setValue(value);
      onValueChange(value);
      calculateActiveTrackPosition(e.currentTarget)
    },
    [onValueChange]
  );
  const onItemHover = useCallback<TMenuContext["onItemHover"]>(
    (e) => {
      calculateHoverTrackPosition(e.currentTarget);
    },
    [calculateHoverTrackPosition]
  );

  /**
   * Section
   */
  const onSectionClick = useCallback<TMenuContext['onSectionClick']>((ev) => {
    const parentEl = ev.currentTarget.parentElement
    const rootEl = rootRef.current
    if (!parentEl || !rootEl) return

    const innerActiveItem = parentEl.querySelector('div[role="menuitem"][data-active="true"]')
    const isClosed = parentEl.getAttribute("data-state") === 'closed'
    if (innerActiveItem && !isClosed) {
      requestAnimationFrame(() => {
        rootEl.style.setProperty("--active-track-opacity", "0");
      })
    } else if (innerActiveItem && isClosed) {
      requestAnimationFrame(() => {
        rootEl.style.setProperty("--active-track-opacity", "1");
      })
    }
  }, [])

  /**
   * Root
   */
  const onRootMouseEnter = useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      const el = rootRef.current;
      if (!el) return;
      setTimeout(() => {
        requestAnimationFrame(() => {
          el.style.setProperty("--hover-track-transition-property", "all");
          el.style.setProperty("--hover-track-opacity", "1");
        });
      }, 100);
    },
    []
  );
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

  return (
    <MenuContext.Provider
      value={{
        color,
        size,
        value,
        onItemHover,
        onItemClick,
        onSectionClick
      }}
    >
      <div
        ref={rootRef}
        role="menu"
        aria-orientation={orientation}
        className={cn("relative flex flex-col gap-1", className)}
        {...props}
        onMouseEnter={onRootMouseEnter}
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
