import React from "react";
import Image from "next/image";
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
          py: "2"
        })}
      >
        <Image
          quality={100}
          alt="Brif UI logo"
          src="/logo.png"
          width={42}
          height={42}
        />
      </div>
    </header>
  );
};
