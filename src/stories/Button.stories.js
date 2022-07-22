// https://www.youtube.com/watch?v=FUKpWgRyPlU
import Button from "../components/Button";

// (1) there needs to be default export
export default {
  title: "Components/Button",
  component: Button,
  // argTypes help define the types of arguments that can be passed to the component
  argTypes: { handleClick: { action: "handleClick" } },
};
// (2) we set the base function
const Template = (args) => <Button {...args} />;
// note: Storybook gets the args from propTypes of the component
// (3) to create multiple stories, add the variants
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
};
