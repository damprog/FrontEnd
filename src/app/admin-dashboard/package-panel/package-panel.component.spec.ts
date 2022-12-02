import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePanelComponent } from './package-panel.component';

describe('PackagePanelComponent', () => {
  let component: PackagePanelComponent;
  let fixture: ComponentFixture<PackagePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
