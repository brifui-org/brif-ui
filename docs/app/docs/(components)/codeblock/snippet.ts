export const defaultSnippet = `import { Codeblock } from "@brifui/components"

const exampleSnippet = \`function MyComponent(props) {
  const num = 100;
  
  // This is the comment
  return (
    <div> 
      <h1 className="bold">Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}\`

const Example = () => (
  <>
    <Codeblock.Root>
      <Codeblock.Content language="tsx">
        {exampleSnippet}
      </Codeblock.Content>
    </Codeblock.Root>
  </>
)
`;

export const hightlightLinesSnippet = `import { Codeblock } from "@brifui/components"

const exampleSnippet = \`function MyComponent(props) {
  const num = 100;
  
  // This is the comment
  return (
    <div> 
      <h1 className="bold">Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}\`

const Example = () => (
  <>
    <Codeblock.Root>
      <Codeblock.Content language="tsx" hightlightLines={[5, 8]}>
        {exampleSnippet}
      </Codeblock.Content>
    </Codeblock.Root>
  </>
)
`;

export const fileNameSnippet = `import { Button, Tooltip } from "@brifui/components"

const exampleSnippet = \`function MyComponent(props) {
  const num = 100;
  
  // This is the comment
  return (
    <div> 
      <h1 className="bold">Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}\`

const Example = () => (
  <>
    <Codeblock.Root>
      <Codeblock.Header
        icon={
          <svg
            height="16"
            viewBox="-11.5 -10.23174 23 20.46348"
            width="16"
            style={{
              shapeRendering: "auto"
            }}
          >
            <circle cx="0" cy="0" fill="currentColor" r="2.05"></circle>
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <ellipse rx="11" ry="4.2"></ellipse>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        }
        filename="hello-world.tsx"
      />
      <Codeblock.Content language="tsx" hightlightLines={[5, 8]}>
        {exampleSnippet}
      </Codeblock.Content>
    </Codeblock.Root>
  </>
)
`;
