/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, useMemo } from "react";

import { DynamicComponentPropsWithRef } from "../../types";
import { cn } from "../cn/cn";

export type CreateDynamicComponentParams<P, DefaultTag extends ElementType> = {
  defaultTag?: DefaultTag;
  displayName?: string;
  classNameVariants?: (props: any) => string;
  defaultProps?: DynamicComponentPropsWithRef<P, DefaultTag>;
  /**
   * Props that are not passed to the component
   * @default []
   */
  excludedProps?: Array<keyof P>;
};

export const createDynamicComponent = <P, DefaultTag extends ElementType>({
  defaultTag = "div" as DefaultTag,
  classNameVariants = () => "",
  defaultProps = {} as DynamicComponentPropsWithRef<P, DefaultTag>,
  excludedProps = []
}: CreateDynamicComponentParams<P, DefaultTag>) => {
  const Comp = <T extends ElementType = DefaultTag>({
    // @ts-expect-error idk
    as: Tag = defaultTag as unknown as T,
    // @ts-expect-error idk
    className = "",
    style: _style,
    ...props
  }: DynamicComponentPropsWithRef<P, T>) => {
    const { included } = useMemo(() => {
      const excluded: Record<string, any> = {};
      const included: Record<string, any> = {};
      for (const [key, value] of Object.entries({
        ...defaultProps,
        ...props
      })) {
        if (excludedProps.includes(key as keyof P)) {
          excluded[key] = value;
        } else {
          included[key] = value;
        }
      }

      return {
        excluded,
        included
      };
    }, [props]);

    const style = useMemo(() => {
      if (typeof _style === "undefined") return undefined;
      else if (typeof _style === "function") return {};
      return _style;
    }, [_style]);

    return (
      <Tag
        {...(included as any)}
        style={style}
        className={cn(classNameVariants(props), className)}
      />
    );
  };

  return Comp;
};
