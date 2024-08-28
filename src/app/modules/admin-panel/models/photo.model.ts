// export interface Photo {
//     id?: string; // Optionnel, si vous avez un identifiant unique pour chaque photo
//     url: string;
//     name?: string; // Optionnel, si vous souhaitez stocker le nom du fichier
//     size?: number; // Optionnel, si vous souhaitez stocker la taille du fichier
//   }
  

export interface Photo {
  id?: string; // Optionnel, si vous avez un identifiant unique pour chaque photo
  url: string;
  name?: string; // Optionnel, si vous souhaitez stocker le nom du fichier
  size?: number; // Optionnel, si vous souhaitez stocker la taille du fichier
  file: File; // Stocker le fichier lui-même
}
