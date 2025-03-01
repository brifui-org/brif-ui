"use client";

import React from "react";
import { useMenu } from "@/app/providers/menu-context";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@brifui/components";
import { css } from "@brifui/styled/css";

export const Header: React.FC = () => {
  const { setOpen } = useMenu();

  return (
    <header
      className={css({
        px: "6",
        display: "flex",
        alignItems: "center",
        borderBottomWidth: "1px",
        borderStyle: "solid",
        borderColor: "border"
      })}
    >
      <div
        className={css({
          py: "2",
          gap: 2,
          display: "flex",
          alignItems: "center",
          w: {
            lg: "calc(201px + {spacing.6})"
          },
          borderRight: {
            lg: "1px solid {colors.border}"
          }
        })}
      >
        <Button
          className={css({
            display: {
              lg: "none"
            }
          })}
          size="icon"
          variant="outline"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={18} />
        </Button>
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
      <div
        className={css({
          flex: 1,
          gap: 2,
          display: "flex",
          justifyContent: "flex-end"
        })}
      >
        <Link href="https://github.com/brifui-org/brif-ui" target="_blank">
          <Button size="sm" variant="outline">
            1.2k
            <Button.Suffix>
              <SiGithub size={20} />
            </Button.Suffix>
          </Button>
        </Link>
        <Link
          href="https://www.npmjs.com/package/@brifui/components"
          target="_blank"
        >
          <Button size="sm" variant="outline">
            1.2k
            <Button.Suffix>
              <SiNpm size={20} />
            </Button.Suffix>
          </Button>
        </Link>
      </div>
    </header>
  );
};
