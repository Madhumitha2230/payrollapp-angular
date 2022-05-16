import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalarySheetComponent } from './add-salary-sheet.component';

describe('AddSalarySheetComponent', () => {
  let component: AddSalarySheetComponent;
  let fixture: ComponentFixture<AddSalarySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalarySheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalarySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
