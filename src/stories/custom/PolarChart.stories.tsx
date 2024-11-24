import { StoryObj, Meta } from "@storybook/react";
import PolarChart from "../../components/PolarChart";

export default {
    title: "ReactComponentLibrary/PolarChart",
    component: PolarChart,
} as Meta<typeof PolarChart>;

type Story = StoryObj<typeof PolarChart>;

export const Primary: Story = { args: {
    
} };