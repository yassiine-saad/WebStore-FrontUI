// import { animate, state, style, transition, trigger } from '@angular/animations';
// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-image-visualizer',
//   templateUrl: './image-visualizer.component.html',
//   styleUrl: './image-visualizer.component.css',
//   animations: [
//     trigger('fadeInOut', [
//       transition(':enter', [
//         style({ opacity: 0 }),
//         animate('300ms', style({ opacity: 1 })),
//       ]),
//       transition(':leave', [
//         animate('300ms', style({ opacity: 0 })),
//       ]),
//     ]),
//   ]
// })
// export class ImageVisualizerComponent implements OnInit {

//   @Input() images : string[] = [
//     "https://cdn-4.motorsport.com/images/amp/Y99eZpLY/s1000/formula-1-japanese-gp-2023-lew-2.jpg",
//     "https://www.formula1.com/content/dam/fom-website/manual/Trademarks/f1-red-800px.png",
//     "https://www.goodwood.com/globalassets/.road--racing/f1/2024/---car-launches-and-liveries/testing/2024-f1-cars-pre-season-testing-01.jpg?crop=(0,0,2600,1463)&width=1200"
//   ] // Liste des chemins d'accès aux images à afficher

//   currentIndex = 0; // Index de l'image actuellement affichée
//   currentImage!: string; // Chemin d'accès à l'image actuellement affichée


//   constructor() { }

//   ngOnInit(): void {
//     if (this.images[0]){
//       this.currentImage = this.images[0];
//     }
//   }

//   // Méthode pour changer l'image principale
//   changeImage(index: number): void {
//     this.currentIndex = index;
//     this.currentImage = this.images[index];
//   }

//   // Méthode pour passer à l'image précédente
//   prevImage(): void {
//     if (this.currentIndex > 0) {
//       this.changeImage(this.currentIndex - 1);
//     }
//   }

//   // Méthode pour passer à l'image suivante
//   nextImage(): void {
//     if (this.currentIndex < this.images.length - 1) {
//       this.changeImage(this.currentIndex + 1);
//     }
//   }


// }


import { Component, Input, OnInit } from '@angular/core';
// import { Image } from '../product.model'; // Assurez-vous d'importer votre modèle Image
import { ProductImage } from '../../models/product.model';

@Component({
  selector: 'app-image-visualizer',
  templateUrl: './image-visualizer.component.html',
  styleUrls: ['./image-visualizer.component.css']
})
export class ImageVisualizerComponent implements OnInit {

  @Input() images: ProductImage[] = [] // Modifier l'entrée pour accepter un tableau d'images

  currentIndex = 0;
  currentImage: ProductImage | undefined; // Modifier le type de l'image actuelle

  constructor() { }

  ngOnInit(): void {
    if (this.images.length > 0) {
      this.currentImage = this.images[0];
    }
  }

  changeImage(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.images[index];
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.changeImage(this.currentIndex - 1);
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.changeImage(this.currentIndex + 1);
    }
  }
}
