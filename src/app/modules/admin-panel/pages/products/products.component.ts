import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { Observable, map } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  totalPages!: number;
  totalElements!: number;
  currentPage!: number;
  pageSize!: number;

 
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];
  dataSource!: MatTableDataSource<Product>;

  // displayedColumns: string[] = ['id', 'name', 'price']; // Colonnes à afficher dans le tableau
  // dataSource!: MatTableDataSource<Product>; // Source de données pour le tableau
  products$!:Observable<Product[]>

  // // Exemple de liste de produits (remplacez-la par vos propres données)
  // products: Product[] = [
  //   { id: 1, name: 'Produit 1', price: 10 },
  //   { id: 2, name: 'Produit 2', price: 20 },
  //   // Ajoutez d'autres produits au besoin
  // ];

  constructor(
    private productService:ProductService,
    private categoryService: CategoryService,
    public dialog: MatDialog,
  ) {
    // this.dataSource = new MatTableDataSource(this.products);
    
  }



  ngOnInit(): void {

    this.currentPage = 0;
    this.pageSize = 5; // Taille de la page par défaut
    

    this.loadProducts();
    this.loadCategories();
  }


  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.')
    
  // }


  addProduct(){}


  // deleteProduct(productId: number): void {
  //   this.productService.deleteProduct(productId).subscribe(
  //     () => {
  //       console.log('Product deleted successfully');
  //       // Actualiser la liste des produits ou effectuer d'autres actions après la suppression
  //     },
  //     error => {
  //       console.error('Error deleting product:', error);
  //     }
  //   );
  // }

  deleteProduct(productId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmer la suppression',
        message: 'Êtes-vous sûr de vouloir supprimer ce produit ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(productId).subscribe(() => {
          this.products$ = this.products$.pipe(map(products => {
            return products.filter(product => product.id !== productId);
          }));
          // this.products = this.products.filter(product => product.id !== productId);
          // this.filteredProducts = this.filteredProducts.filter(product => product.id !== productId);
          // this.dataSource = new MatTableDataSource(this.products).filter(product => product.id !== productId);
        });
      }
    });
  }





  filteredProducts: Product[] = [];
  categories: Category[] = [];
  filterCriteria: any = {
    name: '',
    minPrice: null,
    maxPrice: null,
    category: null
  };




  loadProducts(): void {

    this.products$ = this.productService.getProducts(this.filterCriteria,this.currentPage,this.pageSize).pipe(
      map((response: any) => {
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        return response.content; // Retourne la liste des clients
      })
    );

    // this.productService.getProducts().subscribe(
    //   (data: Product[]) => {
    //     // this.products = data;
    //     this.filteredProducts = data;
    //   },
    //   error => {
    //     console.error('Error fetching products:', error);
    //   }
    // );

  }



  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }





  applyFilter(): void {
    // this.productService.getProducts(this.filterCriteria).subscribe(
    //   (data: Product[]) => {
    //     this.filteredProducts = data;
    //   },
    //   error => {
    //     console.error('Error applying filter:', error);
    //   }
    // );


    this.reloadProducts()
  }

  clearFilter(): void {
    this.filterCriteria = {
      name: '',
      minPrice: null,
      maxPrice: null,
      category: null
    };
    this.applyFilter();
  }

  reloadProducts(): void {
    this.products$ = this.productService.getProducts(this.filterCriteria,this.currentPage,this.pageSize).pipe(
      map((response: any) => {
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        return response.content; // Retourne la liste des clients
      })
    );

  }



  onPageChange(pageEvent: PageEvent): void {
    // this.currentPage = page;

    this.currentPage = pageEvent.pageIndex
    this.pageSize = pageEvent.pageSize
    this.reloadProducts()
    console.log("event",pageEvent)
  }


}
