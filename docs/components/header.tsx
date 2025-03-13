"use client";

import React, { useEffect, useState } from "react";
import { useMenu } from "@/app/providers/menu-context";
import { SiGithub, SiNpm } from "@icons-pack/react-simple-icons";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge, Button } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { dependencies } from "../package.json";

const CURRENT_VERSION = dependencies["@brifui/components"].slice(1);

export const Header: React.FC<{
  stars?: number;
  download?: number;
  alwaysShow?: boolean;
}> = ({ stars = 0, download = 0, alwaysShow = true }) => {
  const { setOpen } = useMenu();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={css({
        minH: "60px",
        maxH: "60px",
        px: "6",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        borderBottomWidth: "2px",
        borderStyle: "solid",
        borderColor: "border",
        position: "sticky",
        bg: "background",
        zIndex: "30"
      })}
    >
      <div
        className={css({
          py: "2",
          gap: 2,
          display: {
            base: "flex",
            lg: alwaysShow ? "flex" : "none"
          },
          alignItems: "center"
        })}
      >
        <>
          {pathname !== "/" && (
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
          )}
          <Link href="/">
            <Image
              quality={100}
              alt="Brif UI logo"
              src="/logo.png"
              width={42}
              height={42}
            />
          </Link>
          <Badge suppressHydrationWarning size="sm">
            {CURRENT_VERSION}
          </Badge>
        </>
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
          <Button
            css={css.raw({
              display: {
                base: "none",
                lg: "flex"
              }
            })}
            size="sm"
            variant="outline"
          >
            {stars || "Github"}
            <Button.Suffix>
              <SiGithub size={16} />
            </Button.Suffix>
          </Button>
          <Button
            css={css.raw({
              display: {
                base: "flex",
                lg: "none"
              }
            })}
            size="icon"
            variant="outline"
          >
            <SiGithub size={16} />
          </Button>
        </Link>
        <Link
          href="https://www.npmjs.com/package/@brifui/components"
          target="_blank"
        >
          <Button
            css={css.raw({
              display: {
                base: "none",
                lg: "flex"
              }
            })}
            size="sm"
            variant="outline"
          >
            {download || "npm"}
            <Button.Suffix>
              <SiNpm size={16} />
            </Button.Suffix>
          </Button>
          <Button
            css={css.raw({
              display: {
                base: "flex",
                lg: "none"
              }
            })}
            size="icon"
            variant="outline"
          >
            <SiNpm size={16} />
          </Button>
        </Link>
        <Button
          size="icon"
          variant="outline"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          <div style={{ width: "16px" }}>
            {mounted && theme === "dark" && <SunIcon size={16} />}
            {mounted && theme === "light" && <MoonIcon size={16} />}
          </div>
        </Button>
      </div>
    </header>
  );
};
