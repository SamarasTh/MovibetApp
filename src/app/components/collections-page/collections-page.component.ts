import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './collections-page.component.html',
  styleUrl: './collections-page.component.scss'
})
export class CollectionsPageComponent implements OnInit {
  collections: any[] = [];

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.loadCollections();
  }

  loadCollections() {
    const storedCollections = localStorage.getItem('movieCollections');
    if (storedCollections) {
      this.collections = JSON.parse(storedCollections);
    } else {
      this.collections = [];
    }
  }

  navigateToCreateCollectionPage(){
    this.router.navigate(['/collections/create']);
  }


  toggleCollection(title : string){
    this.router.navigate([`/collections/${title}`]);
  }
  

  goHome(){
    this.router.navigate(['/search']);
  }
}
