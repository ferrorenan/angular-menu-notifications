import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../models/notification';
import {
  CardNotificationComponent
} from '../card-notification/card-notification.component';
import { animateListItems } from '../../animations/animations';

@Component({
  selector: 'app-menu-notifications',
  standalone: true,
  imports: [
      CommonModule,
      CardNotificationComponent
  ],
  templateUrl: './menu-notifications.component.html',
  styleUrls: ['./menu-notifications.component.scss'],
  animations: [
    animateListItems
  ]
})
export class MenuNotificationsComponent implements OnInit  {

  showNotificationsContainer = false;

  notificationsMockup: Notification[] = [
    {
      title: 'You have a new friend request',
      createdAt: '2023-02-21',
      description:
          'Coool, You have a new friend request!',
    },
    {
      title: 'New Dev.To post!',
      createdAt: '2023-02-21',
      description:
          'You have a new post to read on dev.to!',
    },
    {
      title: 'What is Lorem Ipsum?',
      createdAt: '2023-02-21',
      description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'What is Lorem Ipsum?',
      createdAt: '2023-02-21',
      description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  ngOnInit(): void {

    this.listEndAnimationenOpenOffCanvas();
  }

  listEndAnimationenOpenOffCanvas(): void {

    const notificationsOffcanvas = document.getElementById('offcanvasNotifications');

    if (!notificationsOffcanvas){
      return;
    }

    notificationsOffcanvas.addEventListener('shown.bs.offcanvas', () => {

      console.log('entrou');
      this.showNotificationsContainer = true;
    });
  }
}
