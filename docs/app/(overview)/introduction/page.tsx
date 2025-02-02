import { Section, SectionTitle } from "@/components";
import { PageLayout } from "@/layouts/page-layout";
import { Typography } from "@brifui/components";

export default function Introduction() {
  return (
    <PageLayout title="Introduction">
      <div
        style={{
          background: `linear-gradient(-180deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 1) 48%),
            linear-gradient( -90deg, 
            rgba(255,180,31,0.25) 0%, 
            rgba(255,150,51,0.25) 25%, 
            rgba(255,92,143,0.25) 50%, 
            rgba(155,77,255,0.25) 75%, 
            rgba(77,138,255,0.25) 100%),
            url(/noise.png)
            center top`
        }}
        className="relative overflow-hidden rounded-xl px-4 py-14 sm:px-8 border"
      >
        <div className="flex flex-col justify-between gap-4">
          <Typography.Heading
            level={2}
            className="text-primary-foreground text-3xl/[1.1] md:text-4xl/[1.1]"
          >
            Brif UI
          </Typography.Heading>
          <Typography.Text color="muted" size="lg">
            A collection of beautiful components for quickly build application
            UIs.
          </Typography.Text>
        </div>
      </div>

      <Section className="border-b border-border pb-6">
        <SectionTitle id="what-is-brifui">What is BrifUI?</SectionTitle>
        <Typography.Text as="p">
          BrifUI is a UI library that built on top of{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://tailwindcss.com/"
            className="border-b border-primary hover:border-b-2 font-bold"
          >
            TailwindCSS
          </a>{" "}
          and{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://react.dev/"
            className="border-b border-primary hover:border-b-2 font-bold"
          >
            React
          </a>{" "}
          which helps you build beautiful and accessible user interfaces.
        </Typography.Text>
      </Section>

      <Section>
        <SectionTitle id="faq">FAQ</SectionTitle>
        <SectionTitle id="is-brifui-a-copy-paste-library" level={2}>
          Is BrifUI a copy-paste library?
        </SectionTitle>
        <Typography.Text as="p">
          No, it&apos;s not. BrifUI was built to be installed via package manger
          like <b>npm</b>. You can decide to install an individual component or
          all components as a whole.
        </Typography.Text>
      </Section>

      <Section>
        <SectionTitle id="how-is-brifui-different-from-tailwindcss" level={2}>
          How is BrifUI different from TailwindCSS?
        </SectionTitle>
        <Typography.Text as="p">
          Tailwind CSS is a CSS Framework that provides atomic CSS classes to
          help you style components, leaving you to handle lots of other things
          like accessibility, component composition, keyboard navigation, style
          overrides, etc.
        </Typography.Text>
        <Typography.Text as="p">
          BrifUI is a UI library for React that combines the power of
          TailwindCSS with React Aria to provide complete components (logic and
          styles) for building accessible and customizable user interfaces.
          Since BrifUI uses TailwindCSS as its style engine, you can use all
          TailwindCSS classes within your BrifUI components, ensuring optimal
          compiled CSS size.
        </Typography.Text>
      </Section>

      <Section>
        <SectionTitle
          id="how-brifui-deals-with-tailwindcss-classes-conflicts"
          level={2}
        >
          How does BrifUI deal with TailwindCSS classes conflicts?
        </SectionTitle>
        <Typography.Text as="p">
          We used a TailwindCSS utility library called{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://cva.style/docs"
            className="border-b border-primary hover:border-b-2 font-bold"
          >
            class-variance-authority
          </a>
          that automatically handles{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://tailwindcss.com/"
            className="border-b border-primary hover:border-b-2 font-bold"
          >
            TailwindCSS
          </a>{" "}
          classes conflicts. This ensures your custom classes will consistently
          override the default ones, eliminating any duplication.
        </Typography.Text>
      </Section>

      <Section>
        <SectionTitle id="does-brifui-use-runtime-css" level={2}>
          Does BrifUI use runtime CSS?
        </SectionTitle>
        <Typography.Text as="p">
          No. As BrifUI uses TailwindCSS as its style engine, it generates CSS
          at build time, eliminating the need for runtime CSS. This means that
          BrifUI is fully compatible with the latest React and Next.js versions.
        </Typography.Text>
      </Section>
    </PageLayout>
  );
}
