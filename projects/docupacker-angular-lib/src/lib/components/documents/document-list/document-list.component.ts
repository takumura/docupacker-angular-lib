import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DocumentRef } from '../../../models/document-ref.model';
import { DocumentListItemComponent } from '../document-list-item/document-list-item.component';

@Component({
  selector: 'docup-document-list',
  standalone: true,
  imports: [MatListModule, DocumentListItemComponent],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentListComponent {
  @Input() documents: DocumentRef[] | null = [];
}
