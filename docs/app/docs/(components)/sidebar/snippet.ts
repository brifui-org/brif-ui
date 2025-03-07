export const defaultSnippet = `
import { Avatar, Button, Sidebar } from "@brifui/components";
import {
  Backpack,
  Book,
  Bot,
  ChartArea,
  Component,
  LifeBuoy,
  MessageCircle,
  Settings,
  SquareTerminal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@brifui/styled/css";

const Example = () => (
  <Sidebar.Root
    css={css.raw({
      h: "450px"
    })}
  >
    <Sidebar.Header>
      <Sidebar.Menu
        css={css.raw({
          p: 2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        })}
      >
        <Link href="/docs/sidebar">
          <Image
            quality={100}
            alt="Brif UI logo"
            src="/logo.png"
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
          <Sidebar.MenuItem as={Link} href="#" isSelected>
            <Sidebar.MenuItemIcon>
              <SquareTerminal />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Playground</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <Bot />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Models</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <Book />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Documentation</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem disabled as={Link} href="#">
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
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <Component />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>
              Design Engineering
            </Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <ChartArea />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>
              Sales & Marketing
            </Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <Backpack />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Travel</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <LifeBuoy />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Support</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
          <Sidebar.MenuItem as={Link} href="#">
            <Sidebar.MenuItemIcon>
              <MessageCircle />
            </Sidebar.MenuItemIcon>
            <Sidebar.MenuItemLabel>Feedback</Sidebar.MenuItemLabel>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Group>
    </Sidebar.Body>
    <Sidebar.Footer>
      <Sidebar.Menu>
        <Button fluid>Log out</Button>
      </Sidebar.Menu>
    </Sidebar.Footer>
  </Sidebar.Root>
)`;
