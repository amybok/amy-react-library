import { StoryObj, Meta } from "@storybook/react";
import TextBox from "../../components/TextBox";

export default {
    title: "ReactComponentLibrary/TextBox",
    component: TextBox,
} as Meta<typeof TextBox>;

type Story = StoryObj<typeof TextBox>;

export const Primary: Story = { args: {
    title: "name",
    input: "sswww"
} };