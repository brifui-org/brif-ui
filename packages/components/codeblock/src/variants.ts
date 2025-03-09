import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const codeblockVariants = sva({
  slots: ["root", "content", "line", "header", "filename", "icon"],
  base: {
    root: {
      "& .language-autohotkey .token.selector": {
        color: "#00a4db"
      }
    },
    line: {
      pr: 2,
      cursor: "default",
      display: "block",
      _highlighted: {
        background:
          "color-mix(in oklab, {colors.primary} 20%, transparent 100%)",
        "& .linenumber": {
          background: "primary",
          color: "primary.foreground"
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
      '&[class*="language-"],code[class*="language-"]': {
        tabSize: 4,
        color: "{colors.text} !important",
        fontFamily: "mono",
        direction: "ltr",
        textAlign: "left",
        textShadow: "none !important",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        textStyle: "text.sm",
        hyphens: "none"
      },
      '&>code[class*="language-"]': {
        w: "100%",
        display: "inline-block",
        textStyle: "text.sm"
      },
      /**
       * Code block
       */
      '&[class*="language-"]': {
        py: "1",
        display: "block",
        overflow: "auto",
        backgroundColor: "background"
      },
      /**
       * Inline code
       */
      '&:not(pre) > code[class*="language-"]': {
        px: ".2em",
        py: "px",
        overflow: "auto",
        backgroundColor: "background"
      },

      "& .token": {
        "&.comment,&.prolog,&.doctype,&.cdata": {
          color: "#999988",
          fontStyle: "italic"
        },
        "&.namespace": {
          opacity: 0.7
        },
        "&.string,&.attr-value": {
          color: "#e3116c"
        },
        "&.entity,&.url,&.symbol,&.number,&.boolean,&.variable,&.constant,&.property,&.regex,&.inserted":
          {
            color: "#36acaa"
          },
        "&.atrule,&.keyword,&.attr-name": {
          color: "#00a4db"
        },
        "&.important,&.function,&.bold": {
          color: "#9A050F",
          fontWeight: "bold"
        },
        "&.italic": {
          fontStyle: "italic"
        }
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
