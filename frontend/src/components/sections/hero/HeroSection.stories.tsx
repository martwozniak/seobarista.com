import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroSection, { IHeroSection } from './HeroSection';
import { mockHeroSectionProps } from './HeroSection.mocks';

export default {
  title: 'hero/HeroSection',
  component: HeroSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroSectionProps.base,
} as IHeroSection;
