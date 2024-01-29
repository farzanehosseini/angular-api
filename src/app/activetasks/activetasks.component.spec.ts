import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivetasksComponent } from './activetasks.component';

describe('ActivetasksComponent', () => {
  let component: ActivetasksComponent;
  let fixture: ComponentFixture<ActivetasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivetasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
