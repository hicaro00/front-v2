import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGeneralComponent } from './body-general.component';

describe('BodyGeneralComponent', () => {
  let component: BodyGeneralComponent;
  let fixture: ComponentFixture<BodyGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
