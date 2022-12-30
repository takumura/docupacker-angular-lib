import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'docup-tag',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() value = '';

  constructor() {}

  searchByTag(event: Event): void {
    event.stopPropagation();
    // this.store.dispatch(searchDocumentsByAdvancedOptions({ tags: [this.value], category: '' }));
    // this.router.navigate(['/search']);
  }
}
