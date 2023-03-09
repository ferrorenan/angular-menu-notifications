import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNotificationsComponent } from './menu-notifications.component';

describe('MenuNotificationsComponent', () => {
  let component: MenuNotificationsComponent;
  let fixture: ComponentFixture<MenuNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
