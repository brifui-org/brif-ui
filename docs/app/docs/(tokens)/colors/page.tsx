"use client";

import { InlineLink } from "@/components/inline-link";
import { Page } from "@/components/page";
import { Text } from "@brifui/components";
import { css, Styles } from "@brifui/styled/css";

const previewContainerStyles = css({
  gap: 2,
  mb: 4,
  display: "flex",
  flexDirection: "column"
});

const colorPreviewContainerStyles = css({
  gap: 2,
  display: "flex",
  flexWrap: "wrap"
});

const ColorPreview = ({
  css: _css,
  children
}: {
  css?: Styles;
  children?: string;
}) => {
  return (
    <div
      className={css(
        {
          w: "100px",
          h: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "component.md",
          aspectRatio: "1/1",
          border: "2px solid {colors.border}",
          fontFamily: "mono",
          textStyle: "text.sm",
          fontWeight: "semibold"
        },
        _css
      )}
    >
      {children}
    </div>
  );
};

export default function ColorsDocs() {
  return (
    <Page>
      <Page.Title
        title="Colors"
        description="Rules of colors throughout the system."
      />
      <Page.Section
        title="Tokens"
        description="The color palette is a copy from Vercel."
      >
        <Text
          as="p"
          css={css.raw({
            marginBottom: "2"
          })}
        >
          Color tokens in <InlineLink href="#">BrifUI</InlineLink> are organized
          into 2 layers:
        </Text>
        <Text
          as="ul"
          css={css.raw({
            listStyle: "inside"
          })}
        >
          <Text as="li" fontWeight="semibold">
            Common color tokens
          </Text>
          <Text as="li" fontWeight="semibold">
            Semantic color tokens
          </Text>
        </Text>
      </Page.Section>

      <Page.Section title="Common colors">
        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            White & Black
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "black" })} />
            <ColorPreview css={css.raw({ background: "white" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Gray
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "gray.100" })} />
            <ColorPreview css={css.raw({ background: "gray.200" })} />
            <ColorPreview css={css.raw({ background: "gray.300" })} />
            <ColorPreview css={css.raw({ background: "gray.400" })} />
            <ColorPreview css={css.raw({ background: "gray.500" })} />
            <ColorPreview css={css.raw({ background: "gray.600" })} />
            <ColorPreview css={css.raw({ background: "gray.700" })} />
            <ColorPreview css={css.raw({ background: "gray.800" })} />
            <ColorPreview css={css.raw({ background: "gray.900" })} />
            <ColorPreview css={css.raw({ background: "gray.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Blue
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "blue.100" })} />
            <ColorPreview css={css.raw({ background: "blue.200" })} />
            <ColorPreview css={css.raw({ background: "blue.300" })} />
            <ColorPreview css={css.raw({ background: "blue.400" })} />
            <ColorPreview css={css.raw({ background: "blue.500" })} />
            <ColorPreview css={css.raw({ background: "blue.600" })} />
            <ColorPreview css={css.raw({ background: "blue.700" })} />
            <ColorPreview css={css.raw({ background: "blue.800" })} />
            <ColorPreview css={css.raw({ background: "blue.900" })} />
            <ColorPreview css={css.raw({ background: "blue.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Red
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "red.100" })} />
            <ColorPreview css={css.raw({ background: "red.200" })} />
            <ColorPreview css={css.raw({ background: "red.300" })} />
            <ColorPreview css={css.raw({ background: "red.400" })} />
            <ColorPreview css={css.raw({ background: "red.500" })} />
            <ColorPreview css={css.raw({ background: "red.600" })} />
            <ColorPreview css={css.raw({ background: "red.700" })} />
            <ColorPreview css={css.raw({ background: "red.800" })} />
            <ColorPreview css={css.raw({ background: "red.900" })} />
            <ColorPreview css={css.raw({ background: "red.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Amber
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "amber.100" })} />
            <ColorPreview css={css.raw({ background: "amber.200" })} />
            <ColorPreview css={css.raw({ background: "amber.300" })} />
            <ColorPreview css={css.raw({ background: "amber.400" })} />
            <ColorPreview css={css.raw({ background: "amber.500" })} />
            <ColorPreview css={css.raw({ background: "amber.600" })} />
            <ColorPreview css={css.raw({ background: "amber.700" })} />
            <ColorPreview css={css.raw({ background: "amber.800" })} />
            <ColorPreview css={css.raw({ background: "amber.900" })} />
            <ColorPreview css={css.raw({ background: "amber.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Green
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "green.100" })} />
            <ColorPreview css={css.raw({ background: "green.200" })} />
            <ColorPreview css={css.raw({ background: "green.300" })} />
            <ColorPreview css={css.raw({ background: "green.400" })} />
            <ColorPreview css={css.raw({ background: "green.500" })} />
            <ColorPreview css={css.raw({ background: "green.600" })} />
            <ColorPreview css={css.raw({ background: "green.700" })} />
            <ColorPreview css={css.raw({ background: "green.800" })} />
            <ColorPreview css={css.raw({ background: "green.900" })} />
            <ColorPreview css={css.raw({ background: "green.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Teal
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "teal.100" })} />
            <ColorPreview css={css.raw({ background: "teal.200" })} />
            <ColorPreview css={css.raw({ background: "teal.300" })} />
            <ColorPreview css={css.raw({ background: "teal.400" })} />
            <ColorPreview css={css.raw({ background: "teal.500" })} />
            <ColorPreview css={css.raw({ background: "teal.600" })} />
            <ColorPreview css={css.raw({ background: "teal.700" })} />
            <ColorPreview css={css.raw({ background: "teal.800" })} />
            <ColorPreview css={css.raw({ background: "teal.900" })} />
            <ColorPreview css={css.raw({ background: "teal.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Purple
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "purple.100" })} />
            <ColorPreview css={css.raw({ background: "purple.200" })} />
            <ColorPreview css={css.raw({ background: "purple.300" })} />
            <ColorPreview css={css.raw({ background: "purple.400" })} />
            <ColorPreview css={css.raw({ background: "purple.500" })} />
            <ColorPreview css={css.raw({ background: "purple.600" })} />
            <ColorPreview css={css.raw({ background: "purple.700" })} />
            <ColorPreview css={css.raw({ background: "purple.800" })} />
            <ColorPreview css={css.raw({ background: "purple.900" })} />
            <ColorPreview css={css.raw({ background: "purple.1000" })} />
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Pink
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "pink.100" })} />
            <ColorPreview css={css.raw({ background: "pink.200" })} />
            <ColorPreview css={css.raw({ background: "pink.300" })} />
            <ColorPreview css={css.raw({ background: "pink.400" })} />
            <ColorPreview css={css.raw({ background: "pink.500" })} />
            <ColorPreview css={css.raw({ background: "pink.600" })} />
            <ColorPreview css={css.raw({ background: "pink.700" })} />
            <ColorPreview css={css.raw({ background: "pink.800" })} />
            <ColorPreview css={css.raw({ background: "pink.900" })} />
            <ColorPreview css={css.raw({ background: "pink.1000" })} />
          </div>
        </div>
      </Page.Section>

      <Page.Section title="Semantic colors">
        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Background
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview css={css.raw({ background: "background" })}>
              default
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "background.muted" })}>
              muted
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "background.hover" })}>
              hover
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "background.active" })}>
              active
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "background.disabled" })}>
              disabled
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Text
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({ background: "text", color: "default.foreground" })}
            >
              default
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "text.muted" })}>
              muted
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "text.hover",
                color: "default.foreground"
              })}
            >
              hover
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "text.active",
                color: "default.foreground"
              })}
            >
              active
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "text.disabled" })}>
              disabled
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Border
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({
                background: "border",
                color: {
                  base: "default.foreground",
                  _dark: "text"
                }
              })}
            >
              default
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "border.muted"
              })}
            >
              muted
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "border.hover",
                color: {
                  base: "background",
                  _dark: "text"
                }
              })}
            >
              hover
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "border.active",
                color: "background"
              })}
            >
              active
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "border.disabled" })}>
              disabled
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Default
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({
                background: "default",
                color: "default.foreground"
              })}
            >
              default
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "default.foreground" })}>
              foreground
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "default.hover" })}>
              hover
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "default.active" })}>
              active
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Primary
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({
                background: "primary",
                color: "primary.foreground"
              })}
            >
              default
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "primary.foreground",
                color: {
                  base: "text",
                  _dark: "background"
                }
              })}
            >
              foreground
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "primary.hover",
                color: "primary.foreground"
              })}
            >
              hover
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "primary.active",
                color: "primary.foreground"
              })}
            >
              active
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Warning
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({
                background: "warning",
                color: "warning.foreground"
              })}
            >
              default
            </ColorPreview>
            <ColorPreview css={css.raw({ background: "default.foreground" })}>
              foreground
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "warning.hover",
                color: "warning.foreground"
              })}
            >
              hover
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "warning.active",
                color: "warning.foreground"
              })}
            >
              active
            </ColorPreview>
          </div>
        </div>

        <div className={previewContainerStyles}>
          <Text as="p" fontWeight="semibold" type="text.lg">
            Error
          </Text>
          <div className={colorPreviewContainerStyles}>
            <ColorPreview
              css={css.raw({ background: "error", color: "error.foreground" })}
            >
              default
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "error.foreground",
                color: {
                  base: "text",
                  _dark: "background"
                }
              })}
            >
              foreground
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "error.hover",
                color: "error.foreground"
              })}
            >
              hover
            </ColorPreview>
            <ColorPreview
              css={css.raw({
                background: "error.active",
                color: "error.foreground"
              })}
            >
              active
            </ColorPreview>
          </div>
        </div>
      </Page.Section>
    </Page>
  );
}
