import { Meta, StoryObj } from '@storybook/angular';
import { TagLinkComponent } from './tag-link.component';

const meta: Meta<TagLinkComponent> = {
  title: 'Components/Tags/Tag Link',
  component: TagLinkComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TagLinkComponent>;

export const Tag: Story = {
  args: {
    value: 'Test Tag',
  },
};
