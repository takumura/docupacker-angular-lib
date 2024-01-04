import { Meta, StoryObj } from '@storybook/angular';
import { MdHeaderComponent } from './md-header.component';

const meta: Meta<MdHeaderComponent> = {
  title: 'Components/Markdown/Header',
  component: MdHeaderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MdHeaderComponent>;

export const Header: Story = {
  args: {
    document: {
      title: 'テストドキュメントのタイトル',
      date: '2024-01-01',
      category: 'Angular',
      tag: ['angular', 'test', 'tag'],
      toc: '',
      body: '',
      bodyHtml: '',
    },
  },
};
