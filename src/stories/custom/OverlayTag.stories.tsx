import { StoryObj, Meta } from "@storybook/react";
import OverlayTag from "../../components/OverlayTag";

export default {
    title: "ReactComponentLibrary/OverlayTag",
    component: OverlayTag,
} as Meta<typeof OverlayTag>;

type Story = StoryObj<typeof OverlayTag>;

export const Primary: Story = { args: {
    title: "Greenery",
    colour: "#EDD5D8",
    textColour: "#8a4e7c"
} };