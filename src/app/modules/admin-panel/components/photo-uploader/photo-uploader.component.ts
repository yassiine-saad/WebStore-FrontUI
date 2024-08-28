import { Component, Input } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrl: './photo-uploader.component.css'
})
// export class PhotoUploaderComponent {

//   photos: Photo[] = [];

//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files) {
//       Array.from(input.files).forEach(file => this.uploadFile(file));
//     }
//   }

//   onDragOver(event: DragEvent): void {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   onDrop(event: DragEvent): void {
//     event.preventDefault();
//     event.stopPropagation();
//     if (event.dataTransfer && event.dataTransfer.files) {
//       Array.from(event.dataTransfer.files).forEach(file => this.uploadFile(file));
//     }
//   }

//   uploadFile(file: File): void {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.photos.push({ url: reader.result as string });
//     };
//     reader.readAsDataURL(file);
//   }

//   removePhoto(index: number): void {
//     this.photos.splice(index, 1);
//   }

  
// }



export class PhotoUploaderComponent {
  @Input() photos: Photo[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => this.uploadFile(file));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files) {
      Array.from(event.dataTransfer.files).forEach(file => this.uploadFile(file));
    }
  }

  uploadFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.photos.push({ url: reader.result as string, name: file.name, size: file.size, file });
    };
    reader.readAsDataURL(file);
  }

  removePhoto(index: number): void {
    this.photos.splice(index, 1);
  }

}
