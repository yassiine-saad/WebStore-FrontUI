// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     // Ajoutez d'autres propriétés au besoin
// }

// export interface Product {
//     id?: number;
//     name: string;
//     description: string;
//     price: number;
//     images: string[];
//   }
  

  // export interface Product {
  //   id?: number;
  //   name: string;
  //   description: string;
  //   price: number;
  //   stockQuantity: number;
  //   category: string;
  //   images: string[]; // Liste des noms d'images
  // }
  


  // export interface Product {
  //   id: number;
  //   name: string;
  //   description: string;
  //   price: number;
  //   stockQuantity: number;
  //   category: {
  //     id: number;
  //     name: string;
  //     description: string;
  //   };
  //   images: {
  //     imageName: string;
  //     imageUrl: string;
  //   }[];
  // }


  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: {
      id: number;
      name: string;
      description: string;
    };
    images:ProductImage[];
  }
  
  

  export interface ProductImage {
    imageName: string;
    imageUrl: string;
    file?: File; // Propriété facultative pour le fichier image
    localUrl?: string; // Propriété facultative pour le lien local
  }
  