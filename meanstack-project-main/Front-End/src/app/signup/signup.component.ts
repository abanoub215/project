import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  loginEmail: string = '';
  loginPassword: string = '';
  authService: any;

  onSignup() {
    // Implement your signup logic here
    console.log('Signup Form Submitted');
    console.log('User Name:', this.userName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

   
    this.authService.signup(this.userName, this.email, this.password).subscribe((response: any) => {
      console.log('Signup Successful', response);
     
    });
  }

  onLogin() {
    // Implement your login logic here
    console.log('Login Form Submitted');
    console.log('Email:', this.loginEmail);
    console.log('Password:', this.loginPassword);

  
    this.authService.login(this.loginEmail, this.loginPassword).subscribe((response: any) => {
      console.log('Login Successful', response);

    });
  }
}