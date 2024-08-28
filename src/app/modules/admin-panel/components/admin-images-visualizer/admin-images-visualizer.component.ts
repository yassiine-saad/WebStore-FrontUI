import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-admin-images-visualizer',
  templateUrl: './admin-images-visualizer.component.html',
  styleUrl: './admin-images-visualizer.component.css'
})
export class AdminImagesVisualizerComponent implements OnInit {

  @Input() photos: Photo[] = [];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

  previousPhoto(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextPhoto(): void {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    }
  }
  
}
