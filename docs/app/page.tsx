"use client";

import { Button, Card } from "@brifui/components";
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
          py: 16,
          px: 6,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderBottom: "1px solid {colors.border}",
          flex: 1
        })}
      >
        <div
          className={css({
            px: 4,
            pt: 24,
            display: "flex",
            flexDirection: "column",
            gap: "6"
          })}
        >
          <h1
            className={css({
              fontSize: "xxx-large",
              fontFamily: "heading",
              fontWeight: "600",
              lineHeight: "0.9"
            })}
          >
            Meet Brif,
            <br />A beautiful UI components built with Panda CSS and React.
          </h1>
          <p
            className={css({
              fontSize: "x-large"
            })}
          ></p>

          <div
            className={css({ display: "flex", alignItems: "center", gap: 8 })}
          >
            <Button size="lg">Get started</Button>
            <div
              className={css({
                w: "300px",
                height: "100%",
                background: "background.hover",
                border: "1px solid {colors.border}",
                borderRadius: "lg",
                p: "4"
              })}
            ></div>
          </div>
        </div>
        <div
          className={css({
            px: 4
          })}
        >
          <Card />
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
              className={cx(
                "marquee",
                css({
                  display: "flex",
                  alignItems: "center"
                })
              )}
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
        <style jsx global>{`
          .marquee {
            animation: marquee 60s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% - 1rem));
            }
          }
        `}</style>
      </section>
    </>
  );
}
