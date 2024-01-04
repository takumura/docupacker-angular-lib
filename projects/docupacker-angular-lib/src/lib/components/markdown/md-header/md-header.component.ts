import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownDocument, initialMarkdownDocumentModel } from '../../../models/markdown-document.model';
import { TagLinkListComponent } from '../../tags/tag-link-list/tag-link-list.component';

@Component({
  selector: 'docup-md-header',
  standalone: true,
  imports: [TagLinkListComponent],
  templateUrl: './md-header.component.html',
  styleUrl: './md-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdHeaderComponent {
  @Input() document: MarkdownDocument | undefined = initialMarkdownDocumentModel;
}
