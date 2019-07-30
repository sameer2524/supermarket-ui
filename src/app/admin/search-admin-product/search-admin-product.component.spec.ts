import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdminProductComponent } from './search-admin-product.component';

describe('SearchAdminProductComponent', () => {
  let component: SearchAdminProductComponent;
  let fixture: ComponentFixture<SearchAdminProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdminProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
