import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-card-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-notification.component.html',
  styleUrls: ['./card-notification.component.scss']
})
export class CardNotificationComponent {

  @Input() notification: Notification;

}
