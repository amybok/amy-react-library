import { StoryFn, Meta } from "@storybook/react";
import Polaroid from "../components/Polaroid/Polaroid";

export default {
    title: "ReactComponentLibrary/Polaroid",
    component: Polaroid,
} as Meta<typeof Polaroid>;

export const Default: StoryFn = (label) => {
    return <Polaroid>Button</Polaroid>;
};