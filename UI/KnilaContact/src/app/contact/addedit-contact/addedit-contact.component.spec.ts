import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditContactComponent } from './addedit-contact.component';

describe('AddeditContactComponent', () => {
  let component: AddeditContactComponent;
  let fixture: ComponentFixture<AddeditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
