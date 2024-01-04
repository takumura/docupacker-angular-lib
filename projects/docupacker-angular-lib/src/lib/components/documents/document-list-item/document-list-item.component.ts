import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TagLinkListComponent } from '../../tags/tag-link-list/tag-link-list.component';
import { DocumentRef } from '../../../models/document-ref.model';
import { initialMarkdownDocumentModel } from '../../../models/markdown-document.model';

@Component({
  selector: 'docup-document-list-item',
  standalone: true,
  imports: [MatListModule, TagLinkListComponent],
  templateUrl: './document-list-item.component.html',
  styleUrl: './document-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentListItemComponent implements OnInit {
  @Input() item: DocumentRef = {
    docRef: '',
    content: initialMarkdownDocumentModel,
  };
  @Input() showCategory: boolean = true;
  documentRef: string = '/doc';

  ngOnInit(): void {
    this.documentRef = `/doc/${this.item?.docRef}`;
  }
}
