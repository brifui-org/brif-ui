import React from "react";
import { cx } from "@brifui/styled/css";

import { AvatarVariantProps, avatarVariants } from "./variants";

export type AvatarProps = AvatarVariantProps &
  React.ComponentPropsWithRef<"div"> & {
    size?: number;
    src?: string;
    loading?: React.ComponentPropsWithRef<"img">["loading"];
  };

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 32,
  loading = "eager",
  className,
  isLoading,
  ...props
}) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [isInternalLoading, setLoading] = React.useState<boolean>(true);
  const classes = avatarVariants({ isLoading: isLoading ?? isInternalLoading });

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
      className={cx(classes.root, className)}
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
        className={classes.img}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </div>
  );
};
