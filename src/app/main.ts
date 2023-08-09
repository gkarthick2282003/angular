import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'your_username' && this.password === 'your_password') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  }
}
