import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TagLinkComponent } from '../tag-link/tag-link.component';

@Component({
  selector: 'docup-tag-link-list',
  standalone: true,
  imports: [MatChipsModule, TagLinkComponent],
  templateUrl: './tag-link-list.component.html',
  styleUrl: './tag-link-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagLinkListComponent {
  @Input() tags: string[] | undefined | null = [];
}
