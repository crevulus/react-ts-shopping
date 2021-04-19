import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import Item from "./Item";

export default {
  title: "Item",
  component: Item,
} as Meta;

// @ts-ignore
const Template: Story = (args) => <Item />;

export const ItemExport = Template.bind({});
