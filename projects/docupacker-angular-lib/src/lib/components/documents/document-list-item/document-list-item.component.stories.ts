import { Meta, StoryObj } from '@storybook/angular';
import { DocumentListItemComponent } from './document-list-item.component';

const meta: Meta<DocumentListItemComponent> = {
  title: 'Components/Document List/Document List Item',
  component: DocumentListItemComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DocumentListItemComponent>;

export const ShowCategory: Story = {
  args: {
    showCategory: true,
    item: {
      docRef: 'angular/test-docref',
      content: {
        title: 'テストドキュメントのタイトル',
        date: '2024-01-01',
        category: 'Angular',
        tag: ['angular', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '',
      },
    },
  },
};

export const HideCategory: Story = {
  args: {
    showCategory: false,
    item: {
      docRef: 'angular/test-docref',
      content: {
        title:
          'テストドキュメントのタイトルに関して、非常に長いタイトルをつけるとこのようになりました',
        date: '2024-01-01',
        category: 'Angular',
        tag: ['angular', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '',
      },
    },
  },
};
