import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent implements OnInit,AfterViewInit {



  @Input() formattedContent: string = '';
  @Output() contentChanged = new EventEmitter<string>();

  
  @ViewChild('editor') editor!: ElementRef;
  // formattedContent: string = '';
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  selectedColor: string = '#000000'; // Couleur par défaut
  selectedFont: string = 'Arial';

  selectedFontSize: string = '3px'; // Taille par défaut

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.editor.nativeElement.addEventListener('mouseup', () => {
      this.updateToggleStates();
    });
    this.editor.nativeElement.addEventListener('keyup', () => {
      this.updateToggleStates();
    });

    this.editor.nativeElement.innerHTML = this.formattedContent;
    this.updateToggleStates();
  }


  format(command: string) {
    // const selection = window.getSelection();
    // if (selection && selection.toString().length > 0) {
      document.execCommand(command, false, '');
    // }
    this.updateToggleStates();
    this.editor.nativeElement.focus();
  }

  
  

  applyFont() {
    document.execCommand('fontName', false, this.selectedFont);
    this.editor.nativeElement.focus(); // Restaurer le focus sur l'éditeur de texte
  }

  changeFontSize(action: string) {
    const currentFontSize = window.getComputedStyle(this.editor.nativeElement).fontSize;
    let newFontSize = parseFloat(currentFontSize);

    if (action === 'increase') {
      newFontSize += 2;
    } else if (action === 'decrease') {
      newFontSize -= 2;
    }

    this.editor.nativeElement.style.fontSize = `${newFontSize}px`;
  }

  // changeColor(event: Event) {
  //   const color = (event.target as HTMLInputElement).value;
  //   document.execCommand('foreColor', false, color);
  // }

  applyColor() {
    document.execCommand('foreColor', false, this.selectedColor);
    this.editor.nativeElement.focus(); // Restaurer le focus sur l'éditeur de texte
  }


  applyFontSize() {
    document.execCommand('fontSize', false, this.selectedFontSize);
    this.editor.nativeElement.focus(); // Restaurer le focus sur l'éditeur de texte
  }

  saveContent() {
    this.formattedContent = this.editor.nativeElement.innerHTML;
    this.contentChanged.emit(this.formattedContent);
  }

  updateToggleStates() {
    this.isBold = document.queryCommandState('bold');
    this.isItalic = document.queryCommandState('italic');
    this.isUnderline = document.queryCommandState('underline');
  }

  updateContent() {
    // this.formattedContent = newContent;
    this.saveContent()
    this.updateToggleStates();
    console.log(this.formattedContent)
  }

  toggleList(command: string) {
    // Vérifier si le texte sélectionné est déjà une liste
    const listTag = command === 'insertUnorderedList' ? 'UL' : 'OL';
    const selection = window.getSelection();
    if (selection!.anchorNode) {
      let parentNode = selection!.anchorNode.parentElement;
      while (parentNode) {
        if (parentNode.tagName === listTag) {
          // Si le texte sélectionné est déjà une liste, supprimer la liste
          document.execCommand('outdent', false, '');
          return;
        }
        parentNode = parentNode.parentElement;
      }
    }
   

    document.execCommand(command, false, '');
    this.editor.nativeElement.focus(); // Restaurer le focus sur l'éditeur de texte
  }


}