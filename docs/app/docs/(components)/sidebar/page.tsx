"use client";

import { Page } from "@/components/page";
import {
  Backpack,
  Book,
  Bot,
  ChartArea,
  ChevronsLeft,
  ChevronsRight,
  Component,
  LifeBuoy,
  MessageCircle,
  Settings,
  SquareTerminal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Avatar,
  Button,
  ScrollArea,
  Sidebar,
  useSidebar
} from "@brifui/components";
import { css } from "@brifui/styled/css";

import {
  sidebarAPIs,
  sidebarBodyAPIs,
  sidebarFooterAPIs,
  sidebarGroupAPIs,
  sidebarGroupLabelAPIs,
  sidebarHeaderAPIs,
  sidebarMenuAPIs,
  sidebarMenuItemAPIs,
  sidebarMenuItemIconAPIs,
  sidebarMenuItemLabelAPIs,
  sidebarProviderAPIs
} from "./apis";
import { defaultSnippet } from "./snippet";

const CollapseButton = () => {
  const { isOpen, setOpen } = useSidebar();

  return (
    <div className={css({ p: 2 })}>
      <Button
        size={isOpen ? "md" : "icon"}
        fluid={isOpen}
        onClick={() => setOpen((prev) => !prev)}
      >
        {isOpen && (
          <>
            <Button.Prefix>
              <ChevronsLeft />
            </Button.Prefix>
            Collapse
          </>
        )}
        {!isOpen && (
          <>
            <ChevronsRight />
          </>
        )}
      </Button>
    </div>
  );
};

export default function SidebarDocs() {
  const { isOpen } = useSidebar();

  return (
    <Page>
      <Page.Title
        title="Sidebar"
        description="A composable, themeable and customizable sidebar component."
      />

      <Page.Section title="Default">
        <Page.Preview
          className={css({ p: "0px !important", overflow: "hidden" })}
        >
          <Sidebar.Root isOpen={isOpen}>
            <ScrollArea.Root css={css.raw({ h: "450px" })}>
              <Sidebar.Header css={css.raw({ background: "background" })}>
                <Sidebar.Menu
                  css={css.raw({
                    p: 2,

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  })}
                >
                  <Link href="/docs/sidebar">
                    <img
                      className={css({ w: "32px", h: "32px" })}
                      alt="Brif UI logo"
                      src="/logo-with-bg.png"
                      width={32}
                      height={32}
                    />
                  </Link>

                  <Avatar
                    size={24}
                    src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
                  />
                </Sidebar.Menu>
              </Sidebar.Header>
              <Sidebar.Body>
                <Sidebar.Group>
                  <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem
                      as={Link}
                      isSelected
                      href="#"
                      label="Playground"
                    >
                      <Sidebar.MenuItemIcon>
                        <SquareTerminal />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Playground</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem as={Link} href="#" label="Models">
                      <Sidebar.MenuItemIcon>
                        <Bot />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Models</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem as={Link} href="#" label="Documentation">
                      <Sidebar.MenuItemIcon>
                        <Book />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>
                        Documentation
                      </Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem
                      disabled
                      as={Link}
                      href="#"
                      label="Settings"
                    >
                      <Sidebar.MenuItemIcon>
                        <Settings />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Settings</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.Group>

                <Sidebar.Group>
                  <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
                  <Sidebar.Menu>
                    <Sidebar.MenuItem
                      as={Link}
                      href="#"
                      label="Design Engineering"
                    >
                      <Sidebar.MenuItemIcon>
                        <Component />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>
                        Design Engineering
                      </Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem
                      as={Link}
                      href="#"
                      label="Sales & Marketing"
                    >
                      <Sidebar.MenuItemIcon>
                        <ChartArea />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>
                        Sales & Marketing
                      </Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem as={Link} href="#" label="Travel">
                      <Sidebar.MenuItemIcon>
                        <Backpack />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Travel</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem as={Link} href="#" label="Support">
                      <Sidebar.MenuItemIcon>
                        <LifeBuoy />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Support</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                    <Sidebar.MenuItem as={Link} href="#" label="Feedback">
                      <Sidebar.MenuItemIcon>
                        <MessageCircle />
                      </Sidebar.MenuItemIcon>
                      <Sidebar.MenuItemLabel>Feedback</Sidebar.MenuItemLabel>
                    </Sidebar.MenuItem>
                  </Sidebar.Menu>
                </Sidebar.Group>
              </Sidebar.Body>
              <Sidebar.Footer css={css.raw({ background: "background" })}>
                <Sidebar.Menu>
                  <CollapseButton />
                </Sidebar.Menu>
              </Sidebar.Footer>
            </ScrollArea.Root>
          </Sidebar.Root>
        </Page.Preview>
        <Page.CodePreview>{defaultSnippet}</Page.CodePreview>
      </Page.Section>

      <Page.Section shadow={false} title="API Reference">
        <Page.APIReference title="Provider" apis={sidebarProviderAPIs} />
        <Page.APIReference tag="aside" title="Root" apis={sidebarAPIs} />
        <Page.APIReference title="Header" apis={sidebarHeaderAPIs} />
        <Page.APIReference title="Body" apis={sidebarBodyAPIs} />
        <Page.APIReference title="Footer" apis={sidebarFooterAPIs} />
        <Page.APIReference title="Group" apis={sidebarGroupAPIs} />
        <Page.APIReference title="GroupLabel" apis={sidebarGroupLabelAPIs} />
        <Page.APIReference title="Menu" apis={sidebarMenuAPIs} />
        <Page.APIReference
          tag="T"
          title="MenuItem"
          apis={sidebarMenuItemAPIs}
        />
        <Page.APIReference
          title="MenuItemLabel"
          apis={sidebarMenuItemLabelAPIs}
        />
        <Page.APIReference
          title="MenuItemIcon"
          apis={sidebarMenuItemIconAPIs}
        />
      </Page.Section>
    </Page>
  );
}
