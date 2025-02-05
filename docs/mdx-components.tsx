import type { MDXComponents } from "mdx/types";
import { Typography } from "@brifui/components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography.Heading
        level={1}
        className="text-3xl/[1.1] md:text-4xl/[1.1] mb-6"
      >
        {children}
      </Typography.Heading>
    ),
    h2: ({ children, ...props }) => (
      <Typography.Heading
        level={2}
        className="text-3xl/[1.1] md:text-4xl/[1.1] flex items-center mb-8"
        {...props}
      >
        {children}
      </Typography.Heading>
    ),
    h3: ({ children, id, ...props }) => (
      <Typography.Heading
        id={id}
        level={3}
        className="text-xl/[1.1] md:text-2xl/[1.1] flex items-center group font-normal mt-8 mb-4"
        {...props}
      >
        <a href={`#${id}`}>{children}</a>
        <span className="opacity-0 group-hover:opacity-100 font-normal pl-1 transition-opacity text-foreground-muted/50">
          #
        </span>
      </Typography.Heading>
    ),
    p: ({ children, ...props }) => (
      <Typography.Text as="p" {...props}>
        {children}
      </Typography.Text>
    ),
    hr: () => <hr className="my-8 border-border" />,
    a: ({ children, href }) => (
      <a
        rel="noreferrer"
        target="_blank"
        className="border-b border-primary hover:border-b-2 font-bold"
        href={href}
      >
        {children}
      </a>
    ),
    ...components
  };
}
