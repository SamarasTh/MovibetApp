import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-collections-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './collections-dialog.component.html',
  styleUrls: ['./collections-dialog.component.scss']  
})
export class CollectionsDialogComponent {
  collections: any[] = [];
  selectedCollection: any;

  constructor(
    public dialogRef: MatDialogRef<CollectionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const storedCollections = localStorage.getItem('movieCollections');
    if (storedCollections) {
      this.collections = JSON.parse(storedCollections);
    }
  }

  selectCollection(collection: any): void {
    this.selectedCollection = collection; 
    console.log(collection,'collection');
    this.dialogRef.close({ selectedCollection: this.selectedCollection });
  }

  cancelDialog(): void {
    this.dialogRef.close(); 
  }
}
