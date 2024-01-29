import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivetasksComponent } from './deactivetasks.component';

describe('DeactivetasksComponent', () => {
  let component: DeactivetasksComponent;
  let fixture: ComponentFixture<DeactivetasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeactivetasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeactivetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
