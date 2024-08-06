import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from './category/category.service';
import { Category } from './category/category.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
ngOnInit(): void {
  this.fetchCategories(); } 

categoryService:CategoryService = inject(CategoryService)

categories : Category [] | undefined;

currentActivateCategory:Category = this.categoryService.getCategoryByDefault();

 fetchCategories() {
    throw new Error('Method not implemented.');
  }
}
