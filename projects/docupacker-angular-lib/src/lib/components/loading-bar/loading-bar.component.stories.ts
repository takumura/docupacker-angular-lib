import { Meta, StoryObj } from '@storybook/angular';
import { LoadingBarComponent } from './loading-bar.component';

const meta: Meta<LoadingBarComponent> = {
  title: 'Components/Loading Bar',
  component: LoadingBarComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoadingBarComponent>;

export const Loading: Story = {
  args: {
    loading: true,
  },
};
