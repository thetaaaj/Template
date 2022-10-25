import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {
    name: '',
    email: '',
    secret: ''
  }
  submitted: boolean = false;
  @ViewChild('f') signUpForm!: FormGroup;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.submitted = true;
    this.user.name = this.signUpForm.value.username;
    this.user.email = this.signUpForm.value.email;
    this.user.secret = this.signUpForm.value.secret;
    console.log(this.user);
    this.signUpForm.reset();
  }
}
