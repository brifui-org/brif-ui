export const sizeSnippet = `import { Card } from "@brifui/components";

export const Example = () => (
  <Card shadow="sm">
    <Card.Header>Header</Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
  <Card shadow="md">
    <Card.Header>Header</Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
  <Card shadow="lg">
    <Card.Header>Header</Card.Header>
    <Card.Body>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
)
`


export const borderredSnippet = `import { Card } from "@brifui/components";

export const Example = () => (
  <Card bordered>
    <Card.Header>Header</Card.Header>
    <Card.Body className={css({ py: 6 })}>Body</Card.Body>
    <Card.Footer>Footer</Card.Footer>
  </Card>
)
`