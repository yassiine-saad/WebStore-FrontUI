// phone-number-formatter.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormatter]'
})
export class PhoneNumberFormatterDirective {

  private previousValue: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    const formattedValue = this.formatPhoneNumber(value);
    this.previousValue = formattedValue;
    input.value = formattedValue;
  }

  private formatPhoneNumber(value: string): string {
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i !== 0 && (i % 2 === 0)) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    return formattedValue;
  }
}
