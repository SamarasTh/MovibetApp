import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
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
  }

  goHome(){
    this.router.navigate(['/search']);
  }
}
