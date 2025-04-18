import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPartComponent } from './right-part.component';

describe('RightPartComponent', () => {
  let component: RightPartComponent;
  let fixture: ComponentFixture<RightPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
