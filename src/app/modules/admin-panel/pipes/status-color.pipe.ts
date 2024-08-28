import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {
  transform(value: string): string {

    if (value === 'Confirmée') {
      return '#ff00ff'; // Définissez la couleur magenta pour le statut "CONFIRMED"
    }

    if (value === 'SHIPPED') {
      return '#0000f7'; // Définissez la couleur magenta pour le statut "CONFIRMED"
    }

    if (value === 'DELIVERED') {
      return '#1f8f09'; // Définissez la couleur magenta pour le statut "CONFIRMED"
    }

    if (value === 'CANCELLED') {
      return '#f75b00'; // Définissez la couleur magenta pour le statut "CONFIRMED"
    }

    return ''; // Retourne une chaîne vide pour les autres statuts
  }
}
