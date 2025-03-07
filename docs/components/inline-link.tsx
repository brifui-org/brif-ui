import Link, { LinkProps } from "next/link";
import { Text } from "@brifui/components";
import { css } from "@brifui/styled/css";

export const InlineLink = (
  props: LinkProps & {
    children?: React.ReactNode;
  } & React.ComponentPropsWithRef<"a">
) => {
  return (
    <Text
      css={css.raw({
        fontWeight: "semibold",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "primary",
        textDecorationThickness: "2px",
        _hover: {
          textDecorationThickness: "4px"
        }
      })}
    >
      <Link {...props} />
    </Text>
  );
};
