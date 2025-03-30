import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBodyTextComponent } from './shared-body-text.component';

describe('SharedBodyTextComponent', () => {
  let component: SharedBodyTextComponent;
  let fixture: ComponentFixture<SharedBodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBodyTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedBodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
