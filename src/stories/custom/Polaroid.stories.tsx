import { StoryObj, Meta } from "@storybook/react";
import Polaroid from "../../components/Polaroid";

export default {
    title: "ReactComponentLibrary/Polaroid",
    component: Polaroid,
} as Meta<typeof Polaroid>;

type Story = StoryObj<typeof Polaroid>;

export const Primary: Story = { args: {
    title: ""
} };

//CSF2
// export const Default: StoryObj = ({title}) => {
//     return <Polaroid {...title} ></Polaroid>;
// };