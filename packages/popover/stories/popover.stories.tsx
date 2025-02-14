import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Popover, PopoverProps } from "../src"
import { Button } from "@illa-design/button"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Popover",
  component: Popover,
} as Meta

export const Basic: Story<PopoverProps> = (args) => (
  <div style={{ margin: "200px" }}>
    <Popover
      {...args}
      content="This is a good popover, it can show some interesting things"
      title={"title"}
    >
      <Button>Hello Popover</Button>
    </Popover>
  </div>
)
