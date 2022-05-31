import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillansComponent } from './villans.component';

describe('VillansComponent', () => {
  let component: VillansComponent;
  let fixture: ComponentFixture<VillansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
