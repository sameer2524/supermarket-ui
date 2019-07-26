import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpoductDetailsComponent } from './rpoduct-details.component';

describe('RpoductDetailsComponent', () => {
  let component: RpoductDetailsComponent;
  let fixture: ComponentFixture<RpoductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpoductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpoductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
