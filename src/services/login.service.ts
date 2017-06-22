import {Injectable} from '@angular/core'
import {RESTService} from './rest.service'

@Injectable()
export class LoginService {

  constructor(private rest: RESTService) {
  }

  login(email: string, password: string) {
    return this.rest.get(`/users/?email=${email}&password=${password}`)
  }
}