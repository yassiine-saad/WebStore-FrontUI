import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
// import { Product } from 'path/to/product.model'; // Assurez-vous d'importer votre modèle de produit

@Injectable()
export class ProductService {
//   private products: Product[] = [
//     // Ajoutez vos produits ici (par exemple, vous pouvez initialiser des produits statiques)
//     { id: 1, title: 'Product 1', description: 'Description of Product 1', price: 10.99, imageUrl: 'path/to/image1.jpg' },
//     { id: 2, title: 'Product 2', description: 'Description of Product 2', price: 20.99, imageUrl: 'path/to/image2.jpg' },
//     // Ajoutez d'autres produits ici
//   ];

  // private apiUrl = 'http://localhost:8080/api/v1/products'; // Remplacez par l'URL de votre API
  private apiUrl = environment.apiUrl + '/products'

  constructor(private http: HttpClient) { }

//   getProducts(): Product[] {
//     return this.products;
//   }


  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  getProducts(filterCriteria?: any, page = 0, size =10): Observable<Product[]> {
    let params = new HttpParams();

    params = params.set('page', page.toString())
    params = params.set('size', size.toString());

    if (filterCriteria) {
      if (filterCriteria.name) {
        params = params.set('name', filterCriteria.name);
      }
      if (filterCriteria.minPrice) {
        params = params.set('minPrice', filterCriteria.minPrice.toString());
      }
      if (filterCriteria.maxPrice) {
        params = params.set('maxPrice', filterCriteria.maxPrice.toString());
      }
      if (filterCriteria.category) {
        params = params.set('category', filterCriteria.category);
      }
    }

    return this.http.get<Product[]>(this.apiUrl, { params })
      // .pipe(
      //   catchError(this.handleError) // Gérer les erreurs
      // );
  }



  getProducts_2(category: string | null, searchQuery: string | null, page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (category) {
      params = params.set('category', category);
    }

    if (searchQuery) {
      params = params.set('search', searchQuery);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }


   getProducts_3(categoryId: number | null, searchQuery: string | null, page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
      
    if (categoryId !== null) {
      params = params.set('category', categoryId.toString());
    }

    if (searchQuery) {
      params = params.set('name', searchQuery);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }


  getProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}
