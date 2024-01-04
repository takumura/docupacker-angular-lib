import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  DoBootstrap,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DynamicContainerComponent } from '../dynamic-container/dynamic-container.component';
import { DocumentRef } from '../../../models/document-ref.model';
import { initialMarkdownDocumentModel } from '../../../models/markdown-document.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoadingBarComponent } from '../../loading-bar/loading-bar.component';

@Component({
  selector: 'docup-md-content',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DynamicContainerComponent, LoadingBarComponent],
  templateUrl: './md-content.component.html',
  styleUrl: './md-content.component.scss',
})
export class MdContentComponent implements OnInit, DoBootstrap {
  private documentSub: BehaviorSubject<DocumentRef> = new BehaviorSubject<DocumentRef>({
    docRef: '',
    content: initialMarkdownDocumentModel,
  });
  document$: Observable<DocumentRef> = this.documentSub.asObservable();
  @Input() set doc(x: DocumentRef) {
    this.documentSub.next(x);
  }

  constructor(
    private injector: Injector,
    private cdRef: ChangeDetectorRef,
  ) {
    const element1 = createCustomElement(DynamicContainerComponent, {
      injector: this.injector,
    });
    customElements.get('docup-dynamic-container') ||
      customElements.define('docup-dynamic-container', element1);

    const element2 = createCustomElement(LoadingBarComponent, {
      injector: this.injector,
    });
    customElements.get('docup-loading-bar') ||
      customElements.define('docup-loading-bar', element2);
  }

  ngDoBootstrap() {
    const element1 = createCustomElement(DynamicContainerComponent, {
      injector: this.injector,
    });
    customElements.get('docup-dynamic-container') ||
      customElements.define('docup-dynamic-container', element1);
  }

  ngOnInit(): void {}
}
