import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }

  @ HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    // Remove extra espaces from the string
    this.el.nativeElement.value = value.trim().replace(/\s+/g, ' ');
  }

  @ HostListener('input') onInput() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
