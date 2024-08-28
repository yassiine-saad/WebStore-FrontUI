import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductImage } from '../../models/product.model';


// export class FileEntity {
//   name: string;
//   file: File;

//   constructor(name: string, file: File) {
//     this.name = name;
//     this.file = file;
//   }
// }


// files: FileEntity[] = [];

//   @Output() filesAdded = new EventEmitter<FileEntity[]>();

//   constructor() { }

//   handleFileInput(event: any): void {
//     const newFiles: FileList = event.target.files;
//     for (let i = 0; i < newFiles.length; i++) {
//       const file: File = newFiles[i];
//       const fileEntity = new FileEntity(file.name, file);
//       this.files.push(fileEntity);
//     }
//     this.filesAdded.emit(this.files);
//   }

//   removeFile(index: number): void {
//     this.files.splice(index, 1);
//     this.filesAdded.emit(this.files);
//   }

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
// export class ImageUploaderComponent { 

//   images: string[] = [];

//   @Output() imageAdded = new EventEmitter<string[]>();

//   handleFileInput(event: any): void {
//     const files: FileList = event.target.files;
//     this.processFiles(files);
//   }

//   onDragOver(event: any): void {
//     event.preventDefault();
//   }

//   onDrop(event: any): void {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     this.processFiles(files);
//   }

//   processFiles(files: FileList): void {
//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.images.push(e.target.result);
//       };
//       reader.readAsDataURL(files[i]);
//     }
//     this.imageAdded.emit(this.images);
//   }

//   removeImage(index: number): void {
//     this.images.splice(index, 1);
//     this.imageAdded.emit(this.images);
//   }

  
// }


// export class ImageUploaderComponent { // image 5  <::Active
//   images: string[] = [];
//   isDragging = false;

//   @Output() imageAdded = new EventEmitter<string[]>();

//   constructor() { }

//   handleFileInput(event: any): void {
//     const files: FileList = event.target.files;
//     this.processFiles(files);
//   }

//   onDragOver(event: any): void {
//     event.preventDefault();
//   }

//   onDragEnter(event: any): void {
//     event.preventDefault();
//     this.isDragging = true;
//     event.target.classList.add('hover');
//   }

//   onDragLeave(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//   }

//   onDrop(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//     const files: FileList = event.dataTransfer.files;
//     this.processFiles(files);
//   }

//   processFiles(files: FileList): void {
//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.images.push(e.target.result);
//       };
//       reader.readAsDataURL(files[i]);
//     }
//     this.imageAdded.emit(this.images);
//   }

//   removeImage(index: number): void {
//     this.images.splice(index, 1);
//     this.imageAdded.emit(this.images);
//   }
// }






////////////////////////////// 19 /05 /2024 //////////////////



// export class ImageUploaderComponent {
//   images: string[] = [];
//   isDragging = false;
//   files!:File[];

//   @Output() filesAdded = new EventEmitter<FileList>(); // Événement émettant les fichiers sélectionnés

//   constructor() { }

//   handleFileInput(event: any): void {
//     const files: FileList = event.target.files;
//     this.filesAdded.emit(files); // Émettre les fichiers sélectionnés
//     this.processFiles(files);
//   }

//   onDragOver(event: any): void {
//     event.preventDefault();
//   }

//   onDragEnter(event: any): void {
//     event.preventDefault();
//     this.isDragging = true;
//     event.target.classList.add('hover');
//   }

//   onDragLeave(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//   }

//   onDrop(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//     const files: FileList = event.dataTransfer.files;
//     this.filesAdded.emit(files); // Émettre les fichiers sélectionnés
//     this.processFiles(files);
//   }

//   processFiles(files: FileList): void {
//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.images.push(e.target.result);
//       };
//       reader.readAsDataURL(files[i]);
//     }
//     console.log("images",this.images)
//   }

//   removeImage(index: number): void {
//     this.images.splice(index, 1);
//   }
// }


// export class ImageUploaderComponent {
//   @Input() images: ProductImage[] = []; // Modifier le type de données pour stocker les images

//   isDragging = false;
//   files: ProductImage[] = [];

//   @Output() filesAdded = new EventEmitter<ProductImage[]>(); // Événement émettant les fichiers sélectionnés

//   constructor() { }

//   // handleFileInput(event: any): void {
//   //   const files: FileList = event.target.files;
//   //   this.files = Array.from(files).map(file => ({
//   //     imageName: file.name,
//   //     imageUrl: '',
//   //     file: file
//   //   }));
    
//   //   this.processFiles(this.files);
//   //   this.filesAdded.emit(this.files); // Émettre les fichiers sélectionnés
//   // }

//   handleFileInput(event: any): void {
//     const files: FileList = event.target.files;
//     const newFiles: ProductImage[] = Array.from(files).map(file => ({
//       imageName: file.name,
//       imageUrl: '',
//       file: file
//     }));
  
//     // Concaténer les nouveaux fichiers avec les fichiers existants
//     this.files = [...this.files, ...newFiles];
  
   
//     this.processFiles(newFiles); // Traiter uniquement les nouveaux fichiers
//     this.filesAdded.emit(this.files); // Émettre tous les fichiers sélectionnés
//   }
  

//   onDragOver(event: any): void {
//     event.preventDefault();
//   }

//   onDragEnter(event: any): void {
//     event.preventDefault();
//     this.isDragging = true;
//     event.target.classList.add('hover');
//   }

//   onDragLeave(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//   }

//   onDrop(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//     const files: FileList = event.dataTransfer.files;
//     this.files = Array.from(files).map(file => ({
//       imageName: file.name,
//       imageUrl: '',
//       file: file
//     }));
//     this.filesAdded.emit(this.files); // Émettre les fichiers sélectionnés
//     this.processFiles(this.files);
//   }

//   processFiles(files: ProductImage[]): void {
//     for (const file of files) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         file.imageUrl = e.target.result;
//         this.images.push(file);
//       };
//       reader.readAsDataURL(file.file!);
//     }
//   }

//   removeImage(index: number): void {
//     this.images.splice(index, 1);
//   }
// }



// export class ImageUploaderComponent {
//   @Input() images: ProductImage[] = []; // Modifier le type de données pour stocker les images
//   isDragging = false;
//   files: ProductImage[] = [];
//   @Output() filesAdded = new EventEmitter<ProductImage[]>(); // Événement émettant les fichiers sélectionnés

//   constructor() { }

//   handleFileInput(event: any): void {
//     const files: FileList = event.target.files;
//     const newFiles: ProductImage[] = Array.from(files).map(file => ({
//       imageName: file.name,
//       imageUrl: '',
//       file: file
//     }));

//     // Concaténer les nouveaux fichiers avec les fichiers existants
//     this.files = [...this.files, ...newFiles];

//     this.filesAdded.emit(this.files); // Émettre tous les fichiers sélectionnés
//     this.processFiles(newFiles); // Traiter uniquement les nouveaux fichiers
//   }


//   onDragOver(event: any): void {
//     event.preventDefault();
//   }

//   onDragEnter(event: any): void {
//     event.preventDefault();
//     this.isDragging = true;
//     event.target.classList.add('hover');
//   }

//   onDragLeave(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//   }

//   onDrop(event: any): void {
//     event.preventDefault();
//     this.isDragging = false;
//     event.target.classList.remove('hover');
//     const files: FileList = event.dataTransfer.files;
//     const newFiles: ProductImage[] = Array.from(files).map(file => ({
//       imageName: file.name,
//       imageUrl: '',
//       file: file
//     }));

//     // Concaténer les nouveaux fichiers avec les fichiers existants
//     this.files = [...this.files, ...newFiles];

//     this.filesAdded.emit(this.files); // Émettre tous les fichiers sélectionnés
//     this.processFiles(newFiles); // Traiter uniquement les nouveaux fichiers
//   }

//   processFiles(files: ProductImage[]): void {
//     for (const file of files) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         file.imageUrl = e.target.result;
//         this.images.push(file);
//       };
//       reader.readAsDataURL(file.file!);
//     }
//   }

//   removeImage(index: number): void {
//     this.images.splice(index, 1); // Supprimer l'image de la liste des images affichées
//     if (index < this.files.length) {
//       this.files.splice(index, 1); // Supprimer le fichier correspondant de la liste des fichiers
//     }
//   }


// }


export class ImageUploaderComponent {
  @Input() images: ProductImage[] = []; // Modifier le type de données pour stocker les images
  isDragging = false;
  files: ProductImage[] = [];
  @Output() filesAdded = new EventEmitter<ProductImage[]>(); // Événement émettant les fichiers sélectionnés

  constructor() { }

  handleFileInput(event: any): void {
    this.processFiles(event.target.files);
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }

  onDragEnter(event: any): void {
    event.preventDefault();
    this.isDragging = true;
    event.target.classList.add('hover');
  }

  onDragLeave(event: any): void {
    event.preventDefault();
    this.isDragging = false;
    event.target.classList.remove('hover');
  }

  onDrop(event: any): void {
    event.preventDefault();
    this.isDragging = false;
    event.target.classList.remove('hover');
    this.processFiles(event.dataTransfer.files);
  }

  processFiles(files: FileList): void {
    const newFiles: ProductImage[] = Array.from(files).map(file => ({
      imageName: file.name,
      imageUrl: '',
      file: file
    }));

    // Concaténer les nouveaux fichiers avec les fichiers existants
    this.files = [...this.files, ...newFiles];

    this.filesAdded.emit(this.files); // Émettre tous les fichiers sélectionnés
    this.processImages(newFiles); // Traiter uniquement les nouveaux fichiers
  }

  processImages(images: ProductImage[]): void {
    for (const image of images) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        image.imageUrl = e.target.result;
        this.images.push(image);
      };
      reader.readAsDataURL(image.file!);
    }
  }

  removeImage(index: number): void {
    this.images.splice(index, 1); // Supprimer l'image de la liste des images affichées
    if (index < this.files.length) {
      this.files.splice(index, 1); // Supprimer le fichier correspondant de la liste des fichiers
    }
  }
}