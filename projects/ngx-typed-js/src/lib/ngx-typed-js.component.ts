import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'ngx-typed-js',
  templateUrl: 'ngx-typed-js.component.html',
  styleUrls: ['ngx-typed-js.component.css']
})
export class NgxTypedJsComponent implements AfterViewInit, OnChanges {
  @Input() public cursorColor?: string;

  @Input() public strings: string[];
  @Input() public stringsElement?: string;
  @Input() public typeSpeed = 30;
  @Input() public startDelay?: number;
  @Input() public backSpeed?: number;
  @Input() public smartBackspace?: boolean;
  @Input() public shuffle?: boolean;
  @Input() public backDelay?: number;
  @Input() public fadeOut?: boolean;
  @Input() public fadeOutClass?: string;
  @Input() public fadeOutDelay?: number;
  @Input() public loop?: boolean;
  @Input() public loopCount?: number;
  @Input() public showCursor?: boolean;
  @Input() public cursorChar?: string;
  @Input() public autoInsertCss?: boolean;
  @Input() public attr?: string;
  @Input() public bindInputFocusEvents?: boolean;
  @Input() public contentType?: string;

  @Output() private completed: EventEmitter<void> = new EventEmitter<void>();
  @Output() private preStringTyped: EventEmitter<number> = new EventEmitter<number>();
  @Output() private stringTyped: EventEmitter<number> = new EventEmitter<number>();
  @Output() private lastStringBackspaced: EventEmitter<void> = new EventEmitter<void>();
  @Output() private typingPaused: EventEmitter<number> = new EventEmitter<number>();
  @Output() private typingResumed: EventEmitter<number> = new EventEmitter<number>();
  @Output() private reset: EventEmitter<void> = new EventEmitter<void>();
  @Output() private stopped: EventEmitter<number> = new EventEmitter<number>();
  @Output() private started: EventEmitter<number> = new EventEmitter<number>();
  @Output() private destroyed: EventEmitter<void> = new EventEmitter<void>();

  private typed: Typed;
  @ViewChild('wrapper', { static: true }) private content;

  ngAfterViewInit(): void {
    this.typed = new Typed(
      this.content.nativeElement.querySelector('.typing'),
      this.options,
    );

    if (this.showCursor !== false) {
      this.updateCursorStyle();
    }
  }

  public toggle(): void {
    this.typed.toggle();
  }

  public stop(): void {
    this.typed.stop();
  }

  public start(): void {
    this.typed.start();
  }

  public destroy(): void {
    this.typed.destroy();
  }

  public doReset(restart?: boolean): void {
    this.typed.reset(restart);
  }

  private get options(): TypedOptions {
    const emit: (emitter: EventEmitter<void>) => (self: Typed) => void
      = (emitter: EventEmitter<void>) => () => emitter.emit();

    const emitIndex: (emitter: EventEmitter<number>) => (index: number, self: Typed) => void
      = (emitter: EventEmitter<number>) => (index: number) => emitter.emit(index);

    const opts = {
      strings: this.strings ?? [''],
      stringsElement: this.stringsElement,
      typeSpeed: this.typeSpeed,
      startDelay: this.startDelay,
      backSpeed: this.backSpeed,
      smartBackspace: this.smartBackspace,
      shuffle: this.shuffle,
      backDelay: this.backDelay,
      fadeOut: this.fadeOut,
      fadeOutClass: this.fadeOutClass,
      fadeOutDelay: this.fadeOutDelay,
      loop: this.loop,
      loopCount: this.loopCount,
      showCursor: this.showCursor,
      autoInsertCss: this.autoInsertCss,
      attr: this.attr,
      bindInputFocusEvents: this.bindInputFocusEvents,
      contentType: this.contentType,
      onComplete: emit(this.completed),
      preStringTyped: emitIndex(this.preStringTyped),
      onStringTyped: emitIndex(this.stringTyped),
      onLastStringBackspaced: emit(this.lastStringBackspaced),
      onTypingPaused: emitIndex(this.typingPaused),
      onTypingResumed: emitIndex(this.typingResumed),
      onReset: emit(this.reset),
      onStop: emitIndex(this.stopped),
      onStart: emitIndex(this.started),
      onDestroy: emit(this.destroyed),
    } as TypedOptions;

    Object.keys(opts).forEach(key => {
      if (opts[key] === undefined) {
        delete opts[key];
      }
    });

    return opts;
  }

  private updateCursorStyle(): void {
    const textElementStyle = getComputedStyle(this.content.nativeElement.querySelector('.typing'));
    const cursorElementStyle = this.content.nativeElement.querySelector('.typed-cursor').style;

    cursorElementStyle.fontSize = textElementStyle.fontSize;
    cursorElementStyle.color = this.cursorColor || textElementStyle.color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.typed) {
      this.typed.destroy();
      this.ngAfterViewInit();
    }
  }
}
