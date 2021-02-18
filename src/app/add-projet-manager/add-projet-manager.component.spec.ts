import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetManagerComponent } from './add-projet-manager.component';

describe('AddProjetManagerComponent', () => {
  let component: AddProjetManagerComponent;
  let fixture: ComponentFixture<AddProjetManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjetManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
