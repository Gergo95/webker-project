import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeTableComponent } from './cofee-table.component';

describe('CofeeTableComponent', () => {
  let component: CofeeTableComponent;
  let fixture: ComponentFixture<CofeeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CofeeTableComponent]
    });
    fixture = TestBed.createComponent(CofeeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
