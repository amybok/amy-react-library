import { StoryObj, Meta } from "@storybook/react";
import Post from "../../components/Post";

export default {
    title: "ReactComponentLibrary/Post",
    component: Post,
} as Meta<typeof Post>;

type Story = StoryObj<typeof Post>;

export const Primary: Story = { args: {
    label: ""
} };