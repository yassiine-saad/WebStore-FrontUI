import { Component, Input } from '@angular/core';
import { Photo } from '../../../admin-panel/models/photo.model';

@Component({
  selector: 'app-product-images-visualizer',
  templateUrl: './product-images-visualizer.component.html',
  styleUrl: './product-images-visualizer.component.css'
})
// export class ProductImagesVisualizerComponent { // ca marche trop bien pour les string

//   @Input() images: string[] = [

//     "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
//     "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg",
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
//   ];
//   currentIndex: number = 0;

//   prevImage(): void {
//     this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
//   }

//   nextImage(): void {
//     this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
//   }

//   selectImage(index: number): void {
//     this.currentIndex = index;
//   }

// }


export class ProductImagesVisualizerComponent {

  @Input() images: Photo[] = [];
  currentIndex: number = 0;

  prevImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  selectImage(index: number): void {
    this.currentIndex = index;
  }

}