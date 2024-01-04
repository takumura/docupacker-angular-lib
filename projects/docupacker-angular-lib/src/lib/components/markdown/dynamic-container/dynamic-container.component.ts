import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  DoBootstrap,
  ElementRef,
  Injector,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import postscribe from 'postscribe';
import { DocumentRef } from '../../../models/document-ref.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { createCustomElement } from '@angular/elements';
import { LoadingBarComponent } from '../../loading-bar/loading-bar.component';

@Component({
  selector: 'docup-dynamic-container',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [LoadingBarComponent],
  templateUrl: './dynamic-container.component.html',
  styleUrl: './dynamic-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicContainerComponent implements OnInit, DoBootstrap {
  @Input() doc$: Observable<DocumentRef> = of();
  @ViewChild('mdContent') mdContentRef: ElementRef | undefined;
  safeMdContent: SafeHtml | undefined;
  destroyRef = inject(DestroyRef);

  constructor(
    private sanitizer: DomSanitizer,
    private injector: Injector,
    private cdRef: ChangeDetectorRef,
  ) { 
    const element2 = createCustomElement(LoadingBarComponent, {
      injector: this.injector,
    });
    customElements.get('docup-loading-bar') ||
      customElements.define('docup-loading-bar', element2);
  }

  ngDoBootstrap() {
    const element2 = createCustomElement(LoadingBarComponent, {
      injector: this.injector,
    });
    customElements.get('docup-loading-bar') ||
      customElements.define('docup-loading-bar', element2);
  }

  ngOnInit(): void {
    this.doc$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((x) => {
      this.safeMdContent = this.sanitizer.bypassSecurityTrustHtml(
        x.content.bodyHtml,
      );
      // this.cdRef.markForCheck();
      this.cdRef.detectChanges();
      this.showGist();
    });
  }

  private showGist() {
    if (this.mdContentRef) {
      const gists =
        this.mdContentRef.nativeElement.querySelectorAll('div.gist');
      gists.forEach((gist: HTMLDivElement) => {
        postscribe(gist, gist.innerHTML);
      });
    }
  }
}
