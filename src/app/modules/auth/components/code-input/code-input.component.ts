import { Conditional } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrl: './code-input.component.css'
})
export class CodeInputComponent implements OnInit {
  // inputs: string[] = ['', '', '', '', '', ''];
  // @Output() codeEntered: EventEmitter<string> = new EventEmitter<string>();

  // onInput(event: Event, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value.replace(/[^0-9]/g, '');
    
  //   if (value) {
  //     this.inputs[index] = value;
  //     if (index < 5) {
  //       (document.getElementById(`code-input-${index + 1}`) as HTMLInputElement).focus();
  //     }
  //   }

  //   this.checkCode();
  // }

  // onKeyDown(event: KeyboardEvent, index: number): void {
  //   if (event.key === 'Backspace' && !this.inputs[index] && index > 0) {
  //     (document.getElementById(`code-input-${index - 1}`) as HTMLInputElement).focus();
  //   }
  // }

  // checkCode(): void {
  //   if (this.inputs.every(input => input.length === 1)) {
  //     this.codeEntered.emit(this.inputs.join(''));
  //   }
  // }
  

  // inputs: string[] = ['1', '2', '3', '4', '5', '6'];
  // @Output() codeEntered: EventEmitter<string> = new EventEmitter<string>();

  // onInput(event: Event, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value.replace(/[^0-9]/g, '');

  //   if (value.length === 1) {
  //     this.inputs[index] = value;
  //     if (index < 5) {
  //       (document.getElementById(`code-input-${index + 1}`) as HTMLInputElement).focus();
  //     }
  //   } else if (value.length > 1) {
  //     // Si l'utilisateur colle un texte avec plus d'un caractère
  //     this.inputs = value.split('').slice(0, 6);
  //     this.fillInputs();
  //   }

  //   this.checkCode();
  // }

  // onKeyDown(event: KeyboardEvent, index: number): void {
  //   if (event.key === 'Backspace' && !this.inputs[index] && index > 0) {
  //     this.inputs[index] = '';
  //     (document.getElementById(`code-input-${index - 1}`) as HTMLInputElement).focus();
  //   } else if (event.key === 'Backspace') {
  //     this.inputs[index] = '';
  //   }
  // }

  // fillInputs(): void {
  //   this.inputs.forEach((value, index) => {
  //     const inputElement = document.getElementById(`code-input-${index}`) as HTMLInputElement;
  //     inputElement.value = value;
  //   });
  // }

  // checkCode(): void {
  //   if (this.inputs.every(input => input.length === 1)) {
  //     this.codeEntered.emit(this.inputs.join(''));
  //   }
  // }


  // inputs: string[] = ['', '', '', '', '', ''];
  // @Output() codeEntered: EventEmitter<string> = new EventEmitter<string>();

  // onInput(event: Event, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value.replace(/[^0-9]/g, '');

  //   if (value) {
  //     this.inputs[index] = value[0];
  //     setTimeout(() => {
  //       if (index < 5) {
  //         (document.getElementById(`code-input-${index + 1}`) as HTMLInputElement).focus();
  //       }
  //       this.checkCode();
  //     });
  //   } else {
  //     this.inputs[index] = '';
  //   }
  // }

  // onKeyDown(event: KeyboardEvent, index: number): void {
  //   const input = event.target as HTMLInputElement;
  //   if (event.key === 'Backspace' && !input.value && index > 0) {
  //     setTimeout(() => {
  //       this.inputs[index - 1] = '';
  //       (document.getElementById(`code-input-${index - 1}`) as HTMLInputElement).focus();
  //     });
  //   }
  // }

  // checkCode(): void {
  //   if (this.inputs.every(input => input.length === 1)) {
  //     this.codeEntered.emit(this.inputs.join(''));
  //   }
  // }



  // codeInputs: string[] = new Array(6).fill('');

  // @Output() codeSubmit = new EventEmitter<string>();

  // onInputChange(value: string, index: number): void {
  //   this.codeInputs[index] = value;
  //   if (value.length === 1 && index < this.codeInputs.length - 1) {
  //     document.getElementById('codeInput' + (index + 1))?.focus();
  //   }
  // }

  // onKeyDown(event: KeyboardEvent, index: number): void {
  //   if (event.key === 'Backspace' && !this.codeInputs[index] && index > 0) {
  //     document.getElementById('codeInput' + (index - 1))?.focus();
  //   }
  // }

  // submitCode(): void {
  //   const code = this.codeInputs.join('');
  //   if (code.length === 6) {
  //     this.codeSubmit.emit(code);
  //   } else {
  //     alert('Veuillez entrer un code complet de 6 chiffres.');
  //   }
  // }


  // codeForm: FormGroup;

  // @Output() codeSubmit = new EventEmitter<string>();

  // constructor(private fb: FormBuilder) {
  //   this.codeForm = this.fb.group({
  //     codes: this.fb.array(new Array(6).fill('').map(() => this.fb.control('')))
  //   });
  // }

  // ngOnInit(): void {}

  // get codeInputs(): FormArray {
  //   return this.codeForm.get('codes') as FormArray;
  // }

  // onInputChange(event: Event, index: number): void {
  //   console.log(this.codeForm.value)
  //   const input = event.target as HTMLInputElement;
  //   if (input.value.length === 1 && index < this.codeInputs.length - 1) {
  //     document.getElementById('codeInput' + (index + 1))?.focus();
  //   }
  // }

  // onKeyDown(event: KeyboardEvent, index: number): void {
  //   if (event.key === 'Backspace' && !this.codeInputs.at(index).value && index > 0) {
  //     document.getElementById('codeInput' + (index - 1))?.focus();
  //   }
  // }

  // submitCode(): void {
  //   const code = this.codeInputs.value.join('');
  //   if (code.length === 6) {
  //     this.codeSubmit.emit(code);
  //   } else {
  //     alert('Veuillez entrer un code complet de 6 chiffres.');
  //   }
  // }

  codeForm!: FormGroup;

  @Output() codeSubmit = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.codeForm = this.fb.group({
      0: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
      1: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
      2: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
      3: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
      4: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
      5: ['', [Validators.required, Validators.maxLength(1), this.onlyNumbersValidator]],
    });
  }

  get controls() {
    return Object.keys(this.codeForm.controls);
  }

  onlyNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^[0-9]$/.test(value)) {
      return { invalidNumber: true };
    }
    return null;
  }

  onInputChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/^[0-9]$/.test(value)) {
      this.codeForm.controls[index].setValue(value);
      if (index < this.controls.length - 1) {
        document.getElementById('codeInput' + (index + 1))?.focus();
      }
    } else {
      this.codeForm.controls[index].setValue('');
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.codeForm.controls[index].value && index > 0) {
      document.getElementById('codeInput' + (index - 1))?.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedData = clipboardData?.getData('text/plain').trim();
    if (/^[0-9]{0,6}$/.test(pastedData!)) {
      const values = pastedData!.split('');
      values!.forEach((value, index) => {
        this.codeForm.controls[index].setValue(value);
      });
    }
  }

  submitCode(): void {
    if (this.codeForm.valid) {
      const code = Object.values(this.codeForm.value).join('');
      if (code.length === 6) {
        this.codeSubmit.emit(code);
      } else {
        alert('Veuillez entrer un code complet de 6 chiffres.');
      }
    } else {
      alert('Veuillez remplir tous les champs avec des chiffres de 1 à 9.');
    }
  }

}
