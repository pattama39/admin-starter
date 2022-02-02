import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessdetailComponent } from './bussinessdetail.component';

describe('BussinessdetailComponent', () => {
  let component: BussinessdetailComponent;
  let fixture: ComponentFixture<BussinessdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
