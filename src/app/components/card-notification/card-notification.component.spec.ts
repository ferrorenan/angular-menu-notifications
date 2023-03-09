import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotificationComponent } from './card-notification.component';

describe('CardNotificationComponent', () => {
  let component: CardNotificationComponent;
  let fixture: ComponentFixture<CardNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
