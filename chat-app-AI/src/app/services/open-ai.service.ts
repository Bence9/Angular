import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CompletionRequest, CompletionResponse, Message } from '../chat.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  http = inject(HttpClient);

  storageService = inject(StorageService);

  sendMessage(messages: Message[]) {
    const request: CompletionRequest = {
      model: 'gpt-3.5-turbo',
      messages
    };

    return this.http.post<CompletionResponse>(
      'https://api.openai.com/v1/chat/completions',
      request,
      {
        headers: {
          Authorization: 'Bearer ' + this.storageService.getApiKey()
        }
      }
    );
  }
}