import { ComponentMeta, ComponentStory } from '@storybook/react';
import FeatureSection, { IFeatureSection } from './FeatureSection';
import { mockFeatureSectionProps } from './FeatureSection.mocks';

export default {
  title: 'templates/FeatureSection',
  component: FeatureSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeatureSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeatureSection> = (args) => (
  <FeatureSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeatureSectionProps.base,
} as IFeatureSection;
