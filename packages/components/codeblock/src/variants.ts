import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const codeblockVariants = sva({
  slots: ["root", "content", "line", "header", "filename", "icon"],
  base: {
    root: {},
    line: {
      pr: 2,
      cursor: "default",
      display: "block",
      "& .linenumber": {
        pl: 3.5,
        cursor: "pointer",
        _hover: {
          color: "text"
        }
      },
      _highlighted: {
        background:
          "color-mix(in oklab, {colors.primary} 20%, transparent 100%)",
        "& .linenumber": {
          background: "primary",
          color: "primary.foreground",
          _hover: {
            color: "primary.foreground"
          }
        }
      },
      '&:not([data-highlighted="true"])': {
        "& .linenumber": {
          color: "#999988"
        },
        _hover: {
          background: "background.hover"
        }
      }
    },
    content: {
      pt: 2,
      fontFamily: "mono",
      textStyle: "text.sm",
      overflow: "auto",
      "& > code": {
        display: "block",
        minW: "100%",
        width: "max-content"
      },
      "& .hljs": {
        display: "block",
        overflowX: "auto"
      },
      "& .hljs-name": {
        color: "green.900"
      },
      "& .hljs-keyword": {
        color: "pink.900"
      },
      "& .hljs-title": {
        color: "purple.900"
      },
      "& .hljs-comment": {
        color: "gray.900"
      },
      "& .hljs-function": {
        "& .hljs-keyword": {
          color: "#ff79c6"
        }
      },
      "& .hljs-number": {
        color: "blue.900"
      },
      "& .hljs-string": {
        color: "green.900"
      },
      "& .hljs-attr": {
        color: "amber.900"
      },
      "& .hljs-symbol": {
        color: "green.900"
      },
      "& .hljs-strong": {
        fontWeight: "bold"
      },
      "& .hljs-emphasis": {
        fontStyle: "italic"
      },
      "& .hljs-built_in": {
        color: "amber.900"
      }
    },
    header: {
      p: 2,
      gap: 2,
      color: "default.foreground",
      background: "default",
      alignItems: "center",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "16px 1fr"
    },
    filename: {
      overflow: "hidden",
      fontFamily: "mono",
      textStyle: "text.sm",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    icon: {
      w: 4,
      h: 4,
      color: "text.muted",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }
});

export type CodeblockVariantProps = RecipeVariantProps<
  typeof codeblockVariants
>;
