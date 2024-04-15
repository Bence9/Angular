import { Component, inject } from '@angular/core';
import { Message } from '../chat.models';
import { MessageComponent } from '../message/message.component';
import { FormsModule } from '@angular/forms';
import { OpenAiService } from '../services/open-ai.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
    { role: 'assistant', content: 'Helló! Miben segíthetek?' },
  ];

  newMessage = '';

  openAiService = inject(OpenAiService);

  sendMessage() {
    this.messages.push({ role: 'user', content: this.newMessage });
    this.newMessage = '';
    this.scrollToBottom();

    this.openAiService.sendMessage(this.messages).subscribe({
      next: (res) => {
        this.messages.push(res.choices[0].message);
      },
      error: err => console.log(err)
    });
  }

  scrollToBottom() {
    setTimeout(() => window.scrollTo(0, document.querySelector('#message-box')!.scrollHeight), 200);
  }
}