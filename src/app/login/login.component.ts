import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {Response} from '@angular/http'
import {LoginService} from 'services/login.service'

@Component({
  selector: 'app-login.ts',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})

export class LoginComponent {

  email: string
  password: string

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  submit() {

    this.loginService.login(this.email, this.password)
      .subscribe(
        (success: Response) => console.log('success!'),
        (errors: Response) => this.router.navigate(['/pension']),
        () => console.log('completed')
      )
  }
}
