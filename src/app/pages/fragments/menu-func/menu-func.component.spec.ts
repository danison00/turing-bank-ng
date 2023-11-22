import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFuncComponent } from './menu-func.component';

describe('MenuFuncComponent', () => {
  let component: MenuFuncComponent;
  let fixture: ComponentFixture<MenuFuncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFuncComponent]
    });
    fixture = TestBed.createComponent(MenuFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
