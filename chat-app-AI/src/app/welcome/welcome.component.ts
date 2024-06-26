import { Component, InjectionToken, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  username = '';

  apiKey = '';

  storageService = inject(StorageService);

  router = inject(Router);

  saveUsername(){
    this.storageService.saveUsername(this.username);
    this.storageService.setApiKey(this.apiKey);
    this.router.navigateByUrl('/');
  }
}
