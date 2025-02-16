"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { cx, RecipeVariantProps, sva } from "@brifui/styled/css";

export const avatarProps = sva({
  slots: ["root", "img"],
  base: {
    root: {
      w: "var(--size)",
      h: "var(--size)",
      overflow: "hidden",
      boxSizing: "border-box",
      borderRadius: "9999px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "border"
    },
    img: {
      w: "100%",
      h: "100%",
      objectFit: "cover",
      objectPosition: "center",
      transition: "opacity .15s ease"
    }
  },
  variants: {
    isLoading: {
      true: {
        root: {
          borderStyle: "dashed",
          bg: "background.disabled",
          animation: "spin 5s linear infinite"
        },
        img: {
          opacity: 0
        }
      },
      false: {
        root: {
          borderStyle: "solid"
        },
        img: {
          opacity: 1
        }
      }
    }
  },
  defaultVariants: {
    isLoading: false
  }
});

export type AvatarVariantProps = RecipeVariantProps<typeof avatarProps>;
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
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInternalLoading, setLoading] = useState<boolean>(true);
  const classes = avatarProps({ isLoading: isLoading ?? isInternalLoading });

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, []);

  return (
    <div
      style={
        {
          "--size": `${size}px`
        } as CSSProperties
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
          console.log("haha");
          setLoading(false);
        }}
      />
    </div>
  );
};
