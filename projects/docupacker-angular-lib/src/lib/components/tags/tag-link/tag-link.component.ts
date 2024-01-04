import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'docup-tag-link',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './tag-link.component.html',
  styleUrl: './tag-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagLinkComponent {
  @Input() value = '';
  @Output() onClick = new EventEmitter<Event>();
}
