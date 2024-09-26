import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-create-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './collection-create-page.component.html',
  styleUrl: './collection-create-page.component.scss'
})
export class CollectionCreatePageComponent {

  title: string = '';
  description: string = '';

  constructor(private router: Router) { }

  createCollection() {
    if (!this.title) return;

    const newCollection = {
      title: this.title,
      description: this.description,
      movies: []
    };

    let collections = localStorage.getItem('movieCollections');
    const collectionsArray = collections ? JSON.parse(collections) : [];

    collectionsArray.push(newCollection);
    localStorage.setItem('movieCollections', JSON.stringify(collectionsArray));

    this.router.navigate(['/collections']);
  }
}
