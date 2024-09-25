import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collections-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './collections-dialog.component.html',
  styleUrl: './collections-dialog.component.scss'
})
export class CollectionsDialogComponent {
  collections: any[] = [];
  selectedCollection: any;

  constructor(
    public dialogRef: MatDialogRef<CollectionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  selectCollection(collection: any): void {

  }
  cancelDialog(): void {
    this.dialogRef.close();
  }
}
