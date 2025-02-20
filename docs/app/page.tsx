"use client";

import { Avatar } from "@/components/_avatar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, Card, Input } from "@brifui/components";
import { css, cx } from "@brifui/styled/css";

const components: string[] = [
  "card",
  "button",
  "input",
  "textarea",
  "avatar",
  "modal",
  "badge",
  "calendar",
  "checkbox",
  "radio group",
  "toggle",
  "toggle group"
].sort();

export default function Home() {
  return (
    <>
      <section
        className={css({
          py: {
            base: 12,
            md: 24
          },
          px: 6,
          display: "grid",
          gridTemplateColumns: {
            base: "1fr",
            md: "1fr 1fr"
          },
          borderBottom: "1px solid {colors.border}",
          flex: 1,
          bg: 'linear-gradient(127deg, rgba(255,227,175,1) 0%, rgba(255,255,255,1) 100%), url("/noisy.png");'
        })}
      >
        <div
          className={css({
            px: 4,
            py: {
              base: 12,
              md: 24
            },
            display: "flex",
            flexDirection: "column"
          })}
        >
          <h1
            className={css({
              mb: 4,
              fontSize: {
                base: "2.05rem",
                md: "2.65rem"
              },
              fontFamily: "heading",
              fontWeight: "600",
              lineHeight: "1.47"
            })}
          >
            Meet{" "}
            <span
              className={css({
                border: "1px solid transparent",
                borderColor: "border",
                borderRadius: "component.md",
                boxShadow: "component.md",
                px: 6,
                py: 0,
                bg: "amber.700"
              })}
            >
              Brif
            </span>
            <br />A beautiful UI components built with{" "}
            <span
              className={css({
                border: "1px solid transparent",
                borderColor: "border",
                borderRadius: "component.md",
                boxShadow: "component.md",
                px: 6,
                py: 0,
                bg: "#f6e458",
                color: "#000000"
              })}
            >
              PandaCSS
            </span>{" "}
            and{" "}
            <span
              className={css({
                border: "1px solid transparent",
                borderColor: "border",
                borderRadius: "component.md",
                boxShadow: "component.md",
                px: 6,
                py: 0,
                bg: "#292929",
                color: "#08d9ff"
              })}
            >
              React.
            </span>
          </h1>
          <p
            className={css({
              fontSize: {
                base: "medium",
                md: "larger"
              },
              mb: 10
            })}
          >
            BrifUI offers a comprehensive suite of free UI components to help
            you ship new features faster.
          </p>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 8 })}
          >
            <Link href="/docs">
              <Button size="lg" className="group">
                Get started
                <Button.Suffix
                  className={css({
                    transition: "transform",
                    _groupHover: {
                      transform: "translateX({spacing.1})"
                    }
                  })}
                >
                  <ArrowRight />
                </Button.Suffix>
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={css({
            px: 4,
            position: "relative",
            display: {
              base: "none",
              md: "block"
            }
          })}
        >
          <Card
            className={css({
              position: "absolute",
              top: 0,
              left: 0,
              w: 300
            })}
          >
            <Card.Header
              className={css({
                gap: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              })}
            >
              <Avatar
                size={48}
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
              />
              <div
                className={css({
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                })}
              >
                <div>
                  <div className={css({ fontWeight: "bold" })}>John Doe</div>
                  <p
                    className={css({
                      fontSize: "small",
                      color: "text.subtle"
                    })}
                  >
                    @john.doe
                  </p>
                </div>
                <Button size="sm">Follow</Button>
              </div>
            </Card.Header>
            <Card.Body className={css({ pt: 0 })}>
              <p>Head Over Heels 🎉</p>
            </Card.Body>
          </Card>

          <Input
            className={css({
              position: "absolute",
              top: 100,
              right: 0,
              w: 300
            })}
            placeholder="Enter your email..."
          />
        </div>
      </section>
      <section
        className={css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid {colors.border}",
          overflow: "hidden"
        })}
      >
        <div
          className={css({
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            w: "1/4",
            backgroundImage:
              "linear-gradient(to right, hsl(0 0% 100%), hsl(0 0% 100% / 0))",
            zIndex: 9999
          })}
        />
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={css({
                display: "flex",
                animation: "marquee 60s linear infinite",
                alignItems: "center"
              })}
            >
              {components.map((component) => (
                <div
                  key={component}
                  className={css({
                    fontFamily: "heading",
                    fontWeight: "bold",
                    fontSize: "x-large",
                    textTransform: "capitalize",
                    minW: "200px",
                    py: "4",
                    textAlign: "center",
                    "&:not(:first-child)": {
                      borderRight: "1px solid {colors.border}"
                    },
                    "&:first-child": {
                      borderX: "1px solid {colors.border}"
                    }
                  })}
                >
                  {component}
                </div>
              ))}
            </div>
          ))}
        <div
          className={css({
            position: "absolute",
            top: "0",
            right: "0",
            height: "100%",
            w: "1/4",
            backgroundImage:
              "linear-gradient(to left, hsl(0 0% 100%), hsl(0 0% 100% / 0))",
            zIndex: 9999
          })}
        />
      </section>
    </>
  );
}
