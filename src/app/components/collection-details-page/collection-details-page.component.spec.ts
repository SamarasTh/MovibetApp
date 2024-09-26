import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailsPageComponent } from './collection-details-page.component';

describe('CollectionDetailsPageComponent', () => {
  let component: CollectionDetailsPageComponent;
  let fixture: ComponentFixture<CollectionDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
