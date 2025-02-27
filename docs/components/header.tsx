import React from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@brifui/styled/css";

export const Header: React.FC = () => {
  return (
    <header
      className={css({
        px: "6",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: "border"
      })}
    >
      <div
        className={css({
          py: "2",
          w: "calc(201px + {spacing.6})",
          borderRight: "1px solid {colors.border}"
        })}
      >
        <Link href="/">
          <Image
            quality={100}
            alt="Brif UI logo"
            src="/logo.png"
            width={42}
            height={42}
          />
        </Link>
      </div>
    </header>
  );
};
