import { Heading, HeadingProps } from "@art-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Custom Title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "By Default the Heading will render as `h2`, you can change it by passing the `as` prop.",
      },
    },
  },
};
