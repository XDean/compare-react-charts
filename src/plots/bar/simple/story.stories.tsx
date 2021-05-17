import {Meta, storiesOf, Story} from "@storybook/react";
import {Recharts} from "./recharts";

export default {
  title: "Plot/Bar/Simple",
  component: Recharts,
} as Meta

const Template: Story<{}> = args => <Recharts {...args}/>

export const Empty = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {
  loading: true
}

export const Error = Template.bind({})
Error.args = {
  error: "wrong username or password"
}