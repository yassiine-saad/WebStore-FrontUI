import { Component, Input } from '@angular/core';
import { Photo } from '../../../admin-panel/models/photo.model';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  photos: Photo[] = [];

  @Input() product!: Product; // Déclaration d'une propriété d'entrée pour recevoir les données du produit


  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  downloadAndTransformImages(): void {
    this.product!.images.forEach(image => {
      this.downloadImage(image.imageUrl).then(blob => {
        const file = new File([blob], image.imageName, { type: blob.type });
        const photo: Photo = {
          url: URL.createObjectURL(file),
          name: image.imageName,
          size: file.size,
          file: file
        };
        this.photos.push(photo);
      });
    });
    console.log(this.photos)
  }

  downloadImage(url: string): Promise<Blob> {
    return fetch(url).then(response => response.blob());
  }




  addToCart() {
    this.cartService.addItem(this.product, 1);
  }

  viewDetails() {
    // Implémentez la logique pour visualiser les détails du produit
  }
}
