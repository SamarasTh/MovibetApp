import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent {
  collections: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections() {

  }
}
