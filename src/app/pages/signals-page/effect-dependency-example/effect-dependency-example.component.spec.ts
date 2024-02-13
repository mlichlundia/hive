import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDependencyExampleComponent } from './effect-dependency-example.component';

describe('EffectDependencyExampleComponent', () => {
  let component: EffectDependencyExampleComponent;
  let fixture: ComponentFixture<EffectDependencyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectDependencyExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EffectDependencyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
