export const size = `import { Button } from '@brifui/components'
import { Atom } from "lucide-react"

const Example = () => {
  return (
    <>
      <Button size="icon">
        <Atom />
      </Button>
      <Button size="sm">Solid</Button>
      <Button size="md">Solid</Button>
      <Button size="lg">Solid</Button>
    </>
  )
}`;

export const variants = `import { Avatar } from '@brifui/components'

const Example = () => {
  return (
    <>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
    </>
  )
}`;

export const disabled = `import { Avatar } from '@brifui/components'

const Example = () => {
  return (
    <>
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="error" disabled>
        Error
      </Button>
      <Button variant="warning" disabled>
        Warning
      </Button>
    </>
  )
}`;

export const prefixAndSuffix = `import { Avatar } from '@brifui/components'
import { ArrowLeft, ArrowRight } from "lucide-react"

const Example = () => {
  return (
    <>
      <Button>
        <Button.Prefix>
          <ArrowLeft size={20} />
        </Button.Prefix>
        Solid
      </Button>
      <Button>
        Solid
        <Button.Suffix>
          <ArrowRight size={20} />
        </Button.Suffix>
      </Button>
      <Button>
        <Button.Prefix>
          <ArrowLeft size={20} />
        </Button.Prefix>
        Solid
        <Button.Suffix>
          <ArrowRight size={20} />
        </Button.Suffix>
      </Button>
    </>
  )
}`;
