// phone-format.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialCursorPosition = this.el.nativeElement.selectionStart;
    let trimmedValue = event.target.value.replace(/\s+/g, ''); // Supprime les espaces existants
    let formattedValue = '';
    if (trimmedValue.length > 0) {
      formattedValue = trimmedValue.match(new RegExp('.{1,2}', 'g')).join(' '); // Ajoute un espace après chaque 2 caractères
    }
    this.el.nativeElement.value = formattedValue;
    this.el.nativeElement.setSelectionRange(initialCursorPosition, initialCursorPosition); // Restaure la position du curseur
  }
}
