export const defaultSnippet = `import { ScrollArea, Text } from "@brifui/components"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
);

const Example = () => (
  <>
    <ScrollArea.Root>
      <div className={css({ p: 4, maxH: 72 })}>
        <Text
          type="heading.lg"
          fontWeight="medium"
          css={css.raw({ mb: 4, lineHeight: "none" })}
        >
          Tags
        </Text>
        {tags.map((tag, idx) => (
          <Text
            suppressHydrationWarning
            key={tag}
            as="div"
            type="text.sm"
            css={css.raw({
              py: 4,
              "&:not(:last-child)": {
                borderBottom: "1px solid",
                borderColor: "border.muted"
              }
            })}
          >
            {tag}
          </Text>
        ))}
      </div>
    </ScrollArea.Root>
  </>
)
`;
