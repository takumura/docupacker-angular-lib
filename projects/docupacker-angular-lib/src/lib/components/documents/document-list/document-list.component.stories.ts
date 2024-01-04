import { Meta, StoryObj } from "@storybook/angular";
import { DocumentListComponent } from "./document-list.component";

const meta: Meta<DocumentListComponent> = {
    title: 'Components/Document List/Document List',
    component: DocumentListComponent,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DocumentListComponent>;

export const DocumentList: Story = {
  args: {
    documents: [{
      docRef: 'angular/test-docref',
      content: {
        title: 'テストドキュメントのタイトル1',
        date: '2024-01-01',
        category: 'Angular',
        tag: ['angular', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '',
      },
    },{
      docRef: 'angular/test-docref',
      content: {
        title: 'テストドキュメントのタイトル2',
        date: '2024-01-02',
        category: 'Angular',
        tag: ['angular', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '',
      },
    },{
      docRef: 'csharp/test-docref',
      content: {
        title: 'テストドキュメントのタイトル2',
        date: '2024-01-03',
        category: 'C#',
        tag: ['csharp', 'test', 'tag'],
        toc: '',
        body: '',
        bodyHtml: '',
      },
    }],
  },
};

