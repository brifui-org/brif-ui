import { Avatar } from "@/components/_avatar";
import { Page } from "@/components/page";
import { css } from "@brifui/styled/css";

export default function AvatarDocs() {
  return (
    <Page>
      <Page.Title
        title="Avatar"
        description="Avatars represent a user or a team. Stacked avatars represent a group of people"
      />

      <Page.Section title="Single">
        <Page.Preview gap={4} justify="flex-start">
          <Avatar
            size={30}
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
          <Avatar
            size={50}
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
          <Avatar
            size={100}
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
        </Page.Preview>
      </Page.Section>

      <Page.Section title="Loading">
        <Page.Preview gap={4} justify="flex-start">
          <Avatar
            size={30}
            isLoading
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
          <Avatar
            size={50}
            isLoading
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
          <Avatar
            size={100}
            isLoading
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg"
          />
        </Page.Preview>
      </Page.Section>
    </Page>
  );
}
