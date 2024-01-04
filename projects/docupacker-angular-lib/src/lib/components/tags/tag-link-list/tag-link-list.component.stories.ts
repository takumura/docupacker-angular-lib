import { Meta, StoryObj } from '@storybook/angular';
import { TagLinkListComponent } from './tag-link-list.component';

const meta: Meta<TagLinkListComponent> = {
  title: 'Components/Tags/Tag Link List',
  component: TagLinkListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TagLinkListComponent>;

export const TagList: Story = {
  args: {
    tags: ['tag1', 'tag2', 'tag3'],
  },
};
