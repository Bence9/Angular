import { Component, Input, inject } from '@angular/core';
import { Message } from '../chat.models';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  storageService = inject(StorageService);

  username = this.storageService.getUsername();

  @Input()
  message!: Message;

}
