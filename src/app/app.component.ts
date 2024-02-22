import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Applicant, applicants } from './applicants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  applicants: Applicant[] = applicants;

  isFromVisible : boolean = false;

  newApplicant: Applicant = this.defaultApplicant();

  deleteApplicant(applicant: Applicant){
    const index = this.applicants.indexOf(applicant);
    if(index > -1){
      this.applicants.splice(index, 1)
    }
  }

  openForm(){
    this.isFromVisible = true;
  }

  defaultApplicant(): Applicant {
    return{
      id: 0,
      name: "",
      role: "",
      experience: "0-5",
      desiredSalary: 300000
    };
  }

  addApplicant(){
     this.applicants.push(this.newApplicant);
     this.newApplicant = this.defaultApplicant();
     this.isFromVisible = false;
  }

}
