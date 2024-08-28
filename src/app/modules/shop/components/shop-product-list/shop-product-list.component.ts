import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { map, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrl: './shop-product-list.component.css'
})
// export class ShopProductListComponent implements OnInit {


//   //  products: Product[] = [
//   //   {
//   //     id: 1,
//   //     name: "T-shirt",
//   //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae massa id ipsum viverra euismod.",
//   //     price: 29.99,
//   //     category: "Clothing",
//   //     images: [
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE",
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE"
//   //     ]
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Jeans",
//   //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae massa id ipsum viverra euismod.",
//   //     price: 49.99,
//   //     category: "Clothing",
//   //     images: [
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE",
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE"
//   //     ]
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Sneakers",
//   //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae massa id ipsum viverra euismod.",
//   //     price: 79.99,
//   //     category: "Footwear",
//   //     images: [
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE",
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE"
//   //     ]
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Backpack",
//   //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae massa id ipsum viverra euismod.",
//   //     price: 39.99,
//   //     category: "Accessories",
//   //     images: [
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE",
//   //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.legalzoom.com%2Farticles%2Fhow-to-spot-a-business-opportunity-or-product-gap-in-your-industry&psig=AOvVaw0M8GJr4u02OMTTdfgsYl9q&ust=1717189379986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCgw4ujtoYDFQAAAAAdAAAAABAE"
//   //     ]
//   //   }
//   // ];
  

//   products: Product[] = [];
//   searchQuery: string = '';


//   totalPages!: number;
//   totalElements!: number;
//   currentPage!: number;
//   pageSize!: number;


//   categories: any[] = [
//     { id: 1, name: 'Electronics' },
//     { id: 2, name: 'Clothing' },
//     { id: 3, name: 'Books' },
//     { id: 4, name: 'Home & Kitchen' },
//     { id: 5, name: 'Sports & Outdoors' },
//     // Ajoutez d'autres catégories ici
//   ];
//   selectedCategory: string = ''; // Catégorie sélectionnée (pour le filtre)


//   constructor(private productService: ProductService, private categoryService: CategoryService) { }

//   ngOnInit(): void {
//     this.currentPage = 0;
//     this.pageSize = 8;
//     this.loadProducts();
//     this.loadCategories();
//   }


//   loadCategories() {
//     this.categoryService.getCategories().subscribe(
//       (categories: any[]) => this.categories = categories,
//       (error) => console.error('Error loading categories:', error)
//     );
//   }


//   loadProducts() {
//     // this.productService.getProducts().subscribe(
//     //   (products: Product[]) => {
//     //     this.products = products;
//     //   },
//     //   (error) => {
//     //     console.error('Error loading products:', error);
//     //   }
//     // );

//     this.productService.getProducts(null,this.currentPage,this.pageSize).pipe(
//       map((response: any) => {
//         this.totalPages = response.totalPages;
//         this.totalElements = response.totalElements;
//         return response.content; // Retourne la liste des clients
//       })
//     ).subscribe(response => this.products = response)
//   }

  



//   get filteredProducts(): any[] {
//     return this.products.filter(product =>
//       product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//   }


//   filterByCategory(category: string) {
//     this.selectedCategory = category;
//     // Appliquer le filtre par catégorie sur les produits
//     // Par exemple : this.products = this.productService.filterProductsByCategory(category);
//   }
  

//   onPageChange(pageEvent: PageEvent): void {
//     // this.currentPage = page;

//     this.currentPage = pageEvent.pageIndex
//     this.pageSize = pageEvent.pageSize
//     this.loadProducts()
//     console.log("event",pageEvent)
//   }
// }



// export class ShopProductListComponent implements OnInit {
//   products: Product[] = [];
//   categories: any[] = [];
//   searchQuery: string = '';
//   totalPages!: number;
//   totalElements!: number;
//   currentPage!: number;
//   pageSize!: number;
//   selectedCategory: string = '';

//   constructor(
//     private productService: ProductService,
//     private categoryService: CategoryService
//   ) { }

//   ngOnInit(): void {
//     this.currentPage = 0;
//     this.pageSize = 8;
//     this.loadProducts();
//     this.loadCategories();
//   }

//   loadProducts() {
//     this.productService.getProducts_2(this.selectedCategory, this.searchQuery, this.currentPage, this.pageSize).pipe(
//       map((response: any) => {
//         this.totalPages = response.totalPages;
//         this.totalElements = response.totalElements;
//         return response.content;
//       })
//     ).subscribe(
//       (products: Product[]) => this.products = products,
//       (error) => console.error('Error loading products:', error)
//     );
//   }

//   loadCategories() {
//     this.categoryService.getCategories().subscribe(
//       (categories: any[]) => this.categories = categories,
//       (error) => console.error('Error loading categories:', error)
//     );
//   }

//   onSearchChange() {
//     this.currentPage = 0; // Reset to first page when search query changes
//     this.loadProducts();
//   }

//   filterByCategory(category: string) {
//     this.selectedCategory = category;
//     this.currentPage = 0; // Reset to first page when category changes
//     this.loadProducts();
//   }

//   onPageChange(pageEvent: PageEvent): void {
//     this.currentPage = pageEvent.pageIndex;
//     this.pageSize = pageEvent.pageSize;
//     this.loadProducts();
//   }
// }



export class ShopProductListComponent implements OnInit {
  products: Product[] = [];
  categories: any[] = [];
  searchQuery: string = '';
  totalPages!: number;
  totalElements!: number;
  currentPage!: number;
  pageSize!: number;
  selectedCategoryId: number | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.pageSize = 8;
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts_3(this.selectedCategoryId, this.searchQuery, this.currentPage, this.pageSize).pipe(
      map((response: any) => {
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        return response.content;
      })
    ).subscribe(
      (products: Product[]) => this.products = products,
      (error) => console.error('Error loading products:', error)
    );
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: any[]) => this.categories = categories,
      (error) => console.error('Error loading categories:', error)
    );
  }

  onSearchChange() {
    this.currentPage = 0; // Reset to first page when search query changes
    this.loadProducts();
  }

  filterByCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.currentPage = 0; // Reset to first page when category changes
    this.loadProducts();
  }

  onPageChange(pageEvent: PageEvent): void {
    this.currentPage = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.loadProducts();
  }
}