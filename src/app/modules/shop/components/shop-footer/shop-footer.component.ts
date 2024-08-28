import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-shop-footer',
  templateUrl: './shop-footer.component.html',
  styleUrl: './shop-footer.component.css'
})
export class ShopFooterComponent implements OnInit {

  categories!: any[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadCategories()
  }
  
  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: any[]) => this.categories = categories,
      (error) => console.error('Error loading categories:', error)
    );
  }

}
