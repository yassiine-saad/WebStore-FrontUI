import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductImage } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from '../../models/photo.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit, OnDestroy {

  product!: Product;
  productForm!: FormGroup;
  categories: Category[] = []

  photos: Photo[] = [];
  description:string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }


  ngOnDestroy(): void {
    this.releaseUrls
  }

  ngOnInit(): void {
    this.initForm();
    this.getProductDetails();
    this.loadCategories();
    
  }

  releaseUrls(): void {
    this.photos.forEach(photo => {
      URL.revokeObjectURL(photo.url);
    });
  }


  initForm(): void {
    // Créer le formulaire réactif avec FormBuilder
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stockQuantity: ['', [Validators.required, Validators.min(0)]],
      category: [null, Validators.required] // Le champ catégorie est requis
    });


    // if (this.product) {
      
    // }
  }


  getProductDetails(): void {
    const id = +this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(product =>{
      this.product = product;
      this.downloadAndTransformImages()
      this.description = product.description;

      this.productForm.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        stockQuantity: this.product.stockQuantity,
        category: this.product.category.id
      });

    } );
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





  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
    });
  }

 

  cancel(): void {
    this.router.navigateByUrl('/admin/dashboard/products');
  }


  // addNewCategory(): void {
  //   // Logique pour ajouter une nouvelle catégorie
  //   // console.log('Adding new category...');
  //   // let category = prompt("veuillez saisir le nom de la categorie");
  //   // alert(category);
  // }

  addNewCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.addCategory(result).subscribe((newCategory: Category) => {
          this.categories.push(newCategory);
        });
      }
    });
  }

  saveChanges(): void {
    // Logique pour sauvegarder les modifications du produit
    console.log('Product saved:', this.product);
    console.log('Images:', this.product.images);
    this.saveProduct()

    // this.productService.updateProduct(this.product)
    //   .subscribe(() => {
    //     this.router.navigate(['/product', this.product.id]);
    // });
  }

  onFilesAdded(files: ProductImage[]): void {
    console.log('Files added:', files);
    this.product.images = files;
  }





  saveProduct(): void {
    // Créer un nouvel objet FormData pour envoyer les données du formulaire
    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('description', this.description);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('stockQuantity', this.productForm.get('stockQuantity')?.value);
    formData.append('CategoryId', this.productForm.get('category')?.value); // Envoyer l'ID de la catégorie

    // // Ajouter les images sélectionnées à l'objet FormData
    // for (let i = 0; i < this.productImages.length; i++) {
    //   formData.append('images', this.productImages[i]);
    // }

  //   this.product.images.forEach((image: ProductImage, index: number) => {
  //     formData.append('images[' + index + ']',image.file!, image.file!.name);
  // });


  for (let i = 0; i < this.photos.length; i++) {
    formData.append('images', this.photos[i].file!);
  }


  console.log("product cc",this.product.id);
  console.log("catgori",this.productForm.get('category')?.value)

    // Envoyer la requête HTTP POST au service backend pour ajouter le produit avec les images
    this.productService.updateProduct(formData,this.product.id).subscribe(
      (response) => {
        // Traiter la réponse de succès
        alert("sucess");
        this.router.navigateByUrl('/admin/dashboard/products');
      },
      (error) => {
        // Traiter l'erreur
        alert("failed")
      }
    );
  }




  onEditorContentChange(content: string) {
    this.description = content; // Mettre à jour le contenu dans le composant parent
  }

}



