import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSubTitleComponent } from './shared-sub-title.component';

describe('SharedSubTitleComponent', () => {
  let component: SharedSubTitleComponent;
  let fixture: ComponentFixture<SharedSubTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSubTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
