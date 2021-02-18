import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatutManagerComponent } from './change-statut-manager.component';

describe('ChangeStatutManagerComponent', () => {
  let component: ChangeStatutManagerComponent;
  let fixture: ComponentFixture<ChangeStatutManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStatutManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatutManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
