import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Photo } from '../../../admin-panel/models/photo.model';

@Component({
  selector: 'app-shop-product-detail',
  templateUrl: './shop-product-detail.component.html',
  styleUrl: './shop-product-detail.component.css'
})
export class ShopProductDetailComponent implements OnInit, OnDestroy {

  productId!: number;
  product!: Product;
  quantity: number = 1;

  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) { }


  ngOnDestroy(): void {
    this.releaseUrls();
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProductDetails();
    
  }

  loadProductDetails() {
    this.productService.getProduct(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
        this.downloadAndTransformImages()
      },
      (error: any) => {
        console.error('Error loading product details:', error);
      }
    );
  }


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



  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goBack() {
    this.router.navigateByUrl('/shop/products'); // Redirige vers la liste des produits
  }
  

  addToCart() {
    this.cartService.addItem(this.product, this.quantity);
  }


  releaseUrls(): void {
    this.photos.forEach(photo => {
      URL.revokeObjectURL(photo.url);
    });
  }
}
