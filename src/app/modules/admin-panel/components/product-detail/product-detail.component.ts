import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product!: Product;
  photos: Photo[] = [];
  

  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductDetails();
   
  }

  ngOnDestroy(): void {
    this.releaseUrls();
  }

  getProductDetails(): void {
    const id = +this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(product => {
      this.product = product
      this.downloadAndTransformImages();
    } );
  }


  
  // transformImagesToPhotos(): void {
  //   this.photos = this.product.images.map(image => ({
  //     url: image.imageUrl,
  //     name: image.imageName,
  //     size: 0, // Vous devrez obtenir la taille de l'image si nécessaire
  //     file: null // Ce champ peut être null car il représente le fichier, que vous n'avez pas dans les données actuelles
  //   }));
  // }

  
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


  editProduct(): void {
    // Rediriger vers la page de modification du produit avec l'ID du produit
    // this.router.navigate(['/edit-product', this.product.id]);
  }

  deleteProduct(): void {
    // if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
    //   this.productService.deleteProduct(this.product.id)
    //     .subscribe(() => {
    //       // Rediriger vers la page principale ou une autre page après la suppression du produit
    //       this.router.navigate(['/']);
    //     });
    // }
  }

  releaseUrls(): void {
    this.photos.forEach(photo => {
      URL.revokeObjectURL(photo.url);
    });
  }

}
