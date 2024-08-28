import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product, ProductImage } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  product: any = {name: 'yassine', description: 'saad', price: 88 ,images: [] };
  selectedFiles!: File[];

  description:string = '';


 

  productForm!: FormGroup;
  categories: Category[] = []
  productImages!:ProductImage[]


  photos: Photo[] = [];
  
  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private photoService: PhotoService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.initForm()
    this.loadCategories()
    // this.fetchPhotosFromServer()
  }


  fetchPhotosFromServer(): void {
    const photoUrls = [
      'http://localhost:8080/api/v1/images/download/4117cbd0-7559-4136-a5d9-44fdd3d66233_20240523152439.png',
      'http://localhost:8080/api/v1/images/download/e772df66-5224-4c97-8b6f-7c5ba49999ba_20240523152440.png'
    ];

    photoUrls.forEach(url => {
      this.photoService.getPhoto(url).subscribe(blob => {
        const file = new File([blob], this.extractFileName(url), { type: blob.type });
        const reader = new FileReader();
        reader.onload = () => {
          this.photos.push({ url: reader.result as string, name: file.name, size: file.size, file });
        };
        reader.readAsDataURL(file);
      });
    });

    console.log(this.photos)
  }

  extractFileName(url: string): string {
    return url.split('/').pop() || 'unknown';
  }


  // submitPhotos(): void {
  //   console.log(this.photos);
  //   // Logique pour soumettre les photos au serveur
  // }



  
  initForm(): void {
    // Créer le formulaire réactif avec FormBuilder
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      // description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stockQuantity: ['', [Validators.required, Validators.min(0)]],
      category: [null, Validators.required] // Le champ catégorie est requis
    });


    // if (this.product) {
      
    // }
  }


  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
    });
  }


  addProduct(): void {
    // this.productService.addProduct(this.product).subscribe(() => {
    //     // Rediriger vers la page de détail du produit après l'ajout
    //     this.router.navigate(['/product', this.product.id]);
    //   });

    // this.productService.addProduct(this.product).subscribe();
    this.saveProduct()
  }

  cancel(): void {
    // Rediriger vers la page principale sans ajouter de produit
    this.router.navigate(['/']);
  }

  onFileSelected(event: { target: { files: File[]; }; }): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  


  handleFileInput(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      // Récupérer le fichier sélectionné et l'ajouter aux images du produit
      // console.log(files)
      // const file: File = files[0];
      // this.product.imagePaths.push(URL.createObjectURL(file));
      
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        // Ajouter le chemin d'accès de chaque fichier aux images du produit
        // this.product.images.push(URL.createObjectURL(file));
        this.product.images.push(file);
      }
      console.log(this.product);

    }

    
  }


  // onFilesAdded(files: ProductImage[]): void {
  //   console.log('Fichiers sélectionnés :', files);
  //   // this.product.images = []
  //   // for (let i = 0; i < files.length; i++) {
  //   //   const file: File = files[i];
  //   //   this.product.images.push(file);
  //   // }
  // }

  onFilesAdded(files: ProductImage[]): void {
    console.log('Files added:', files);
    this.productImages = files;
  }




  saveProduct(): void {
    // Créer un nouvel objet FormData pour envoyer les données du formulaire
    const formData = new FormData();
    formData.append('name', this.productForm.get('name')?.value);
    // formData.append('description', this.productForm.get('description')?.value);
    formData.append('description', this.description);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('stockQuantity', this.productForm.get('stockQuantity')?.value);
    formData.append('CategoryId', this.productForm.get('category')?.value); // Envoyer l'ID de la catégorie

    // Ajouter les images sélectionnées à l'objet FormData
    // for (let i = 0; i < this.productImages.length; i++) {
    //   formData.append('images', this.productImages[i].file!);
    // }

    for (let i = 0; i < this.photos.length; i++) {
      formData.append('images', this.photos[i].file!);
    }
  

  //   this.productImages.forEach((image: ProductImage, index: number) => {
  //     formData.append('images[' + index + ']',image.file!, image.file!.name);
  // });

  console.log("product cc",this.product.id);
  console.log("catgori",this.productForm.get('category')?.value)
  console.log("description" + this.description)

    // Envoyer la requête HTTP POST au service backend pour ajouter le produit avec les images
    this.productService.addProduct(formData).subscribe(
      (response) => {
        // Traiter la réponse de succès
        alert("sucess");
      },
      (error) => {
        // Traiter l'erreur
        alert("failed");
      }
    );
  }
  
  

  onEditorContentChange(content: string) {
    this.description = content; // Mettre à jour le contenu dans le composant parent
  }
}
