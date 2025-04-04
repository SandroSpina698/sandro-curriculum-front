import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLangSelectorComponent } from './shared-lang-selector.component';

describe('SharedLangSelectorComponent', () => {
  let component: SharedLangSelectorComponent;
  let fixture: ComponentFixture<SharedLangSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLangSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedLangSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
