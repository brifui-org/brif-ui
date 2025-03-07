import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { WithCssProps } from "@brifui/utils";

import { AvatarVariantProps, avatarVariants } from "./variants";

export type AvatarProps = WithCssProps<
  AvatarVariantProps &
    React.ComponentPropsWithRef<"div"> & {
      size?: number;
      src?: string;
      loading?: React.ComponentPropsWithRef<"img">["loading"];
    }
>;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 32,
  loading = "eager",
  className,
  isLoading,
  css,
  ...props
}) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [isInternalLoading, setLoading] = React.useState<boolean>(true);
  const raw = avatarVariants.raw({ isLoading: isLoading ?? isInternalLoading });

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, []);

  return (
    <div
      style={
        {
          "--size": `${size}px`
        } as React.CSSProperties
      }
      className={cx(_css(raw.root, css), className)}
      {...props}
    >
      <img
        ref={imgRef}
        draggable={false}
        decoding="sync"
        src={src}
        width={size}
        height={size}
        loading={loading}
        className={_css(raw.img)}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </div>
  );
};
