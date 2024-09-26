import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCreatePageComponent } from './collection-create-page.component';

describe('CollectionCreatePageComponent', () => {
  let component: CollectionCreatePageComponent;
  let fixture: ComponentFixture<CollectionCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
