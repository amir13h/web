import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message:string=''
  click(userName:string,password:string) {
    if (userName=='admin' && password=='admin') {
      this.message='welcome✌️'
    }
    else{
      this.message='Username or password is incorrect❌'
    }
    alert(this.message);
  }

}
