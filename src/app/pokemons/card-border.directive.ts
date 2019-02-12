import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// With a directive you can now add attributes
// to template's <tags> like : <el pkmnCardBorder ></el>
// and bind functions to events listener
@Directive({
  selector: '[pkmnCardBorder]'
})
export class CardBorderDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = 'rebeccapurple';
  private defaultHeight: number = 180;
  private defaultOverflow: string = 'hidden';

  @Input('pkmnCardBorder') borderColor: string; // alias

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.setOverflow(this.defaultOverflow);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  private setOverflow(value: string) {
    this.el.nativeElement.style.overflow = value;
  }
}
