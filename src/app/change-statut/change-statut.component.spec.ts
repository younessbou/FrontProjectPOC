import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatutComponent } from './change-statut.component';

describe('ChangeStatutComponent', () => {
  let component: ChangeStatutComponent;
  let fixture: ComponentFixture<ChangeStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStatutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
