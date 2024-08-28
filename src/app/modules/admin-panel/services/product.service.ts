import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment.development';
// import { Product } from './product'; // Importez l'interface Product si elle n'est pas déjà importée

@Injectable()
export class ProductService {
  // private apiUrl = 'http://localhost:8080/api/v1/products'; // Remplacez par l'URL de votre API de produits

  private apiUrl = environment.apiUrl + '/products'

  constructor(private http: HttpClient) { }


  
  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>("http://localhost:8080/api/v1/products");
  // }



  // getProducts(): Observable<any> {   // moi je veux retourner la reponse complete pour la pagination
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map(response => response.content)
  //   );
  // }


  getProducts_1(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl).pipe();
  }

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
      .pipe(
        catchError(this.handleError) // Gérer les erreurs
      );
  }



  // get by id


  // getProductById(id: number): Observable<Product> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     switchMap(product => {
  //       const imageRequests: Observable<Blob>[] = product.images.map(image => {
  //         return this.http.get(image.imageUrl, { responseType: 'blob' });
  //       });
  //       return forkJoin(imageRequests).pipe(
  //         map(images => ({
  //           ...product,
  //           imagesBlobs: images.map(image => URL.createObjectURL(image))
  //         }))
  //       );
  //     })
  //   );
  // }



  // getProductById(id: number): Observable<Product> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Product>(url);
  // }


  

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      // map(product => ({
      //   ...product,
      //   imagesUrls: product.images.map(image => image.imageUrl)
      // }))
    );
  }




  // addProduct(product: any): Observable<Product> {     // working perfect

  //   const formData = new FormData();
  //   formData.append('name',product.name);
  //   formData.append('description', product.description);
  //   formData.append('price', product.price.toString());


  //   // Ajouter chaque image sélectionnée au FormData dans un tableau nommé "images"
  //   product.images.forEach((image: any, index: string) => {
  //       formData.append('images[' + index + ']',image, image.name);
  //   });
  //   // // Ajouter chaque image sélectionnée au FormData dans un tableau nommé "images"
  //   // product.images.forEach((image: string, index: string) => {

  //   //   this.getImageBlob(image).then(blob => {
  //   //     formData.append('images[' + index + ']', blob, 'image' + index + '.png');
  //   //   })
      
      
  //   //   // formData.append('images[' + index + ']', images);
  //   // });

  //   console.log("form data",formData)

  //   // Envoyer la requête HTTP POST pour ajouter le produit à votre backend
  //   return this.http.post<Product>(this.apiUrl, formData);
  // }




  addProduct(productForm: any): Observable<Product> {     // working perfect
    console.log("form data",productForm)
    // Envoyer la requête HTTP POST pour ajouter le produit à votre backend
    return this.http.post<Product>(`${this.apiUrl}`, productForm);
  }


  updateProduct(productForm: any,id:Number): Observable<Product> {     // working perfect
    console.log("form data",productForm)
    // Envoyer la requête HTTP POST pour ajouter le produit à votre backend
    return this.http.put<Product>(`${this.apiUrl}/${id}`, productForm);
  }



  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError) // Gérer les erreurs
      );
  }

  // Méthode pour gérer les erreurs HTTP
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error); // Log de l'erreur
    throw error; // Renvoyer une erreur observable pour que le composant puisse la gérer
  }


  // downloadImage(url: string): Promise<string> {
  //   return this.http.get(url, { responseType: 'blob' }).toPromise().then(blob => {
  //     const fileName = url.split('/').pop();
  //     const file = new File([blob], fileName!, { type: blob.type });
  //     saveAs(file);
  //     return URL.createObjectURL(blob);
  //   });
  // }
  

  // Ajoutez d'autres méthodes pour gérer les opérations CRUD sur les produits selon les besoins
  async getImageBlob(imagePath: string): Promise<Blob> {
    const response = await fetch(imagePath);
    return await response.blob();
  }
}


