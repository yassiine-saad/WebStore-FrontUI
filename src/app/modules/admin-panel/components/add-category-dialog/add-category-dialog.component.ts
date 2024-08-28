import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrl: './add-category-dialog.component.css'
})
export class AddCategoryDialogComponent {

  categoryName: string = '';
  categoryDescription: string = '';

  constructor(public dialogRef: MatDialogRef<AddCategoryDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    const newCategory = {
      name: this.categoryName,
      description: this.categoryDescription
    };
    this.dialogRef.close(newCategory);
  }
}
