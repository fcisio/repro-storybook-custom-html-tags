import React from "react"

import { Button } from "./Button"

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = args => <Button {...args} />

export const Regular = Template.bind({})
Regular.args = {
  as: "button",
  children: "Button",
}

export const Custom = Template.bind({})
Custom.args = {
  children: "Button",
}
