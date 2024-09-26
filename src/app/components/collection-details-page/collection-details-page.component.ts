// collection-details-page.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-details-page',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './collection-details-page.component.html',
  styleUrls: ['./collection-details-page.component.scss']
})
export class CollectionDetailsPageComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
