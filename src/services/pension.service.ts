import {Injectable} from '@angular/core'
import {RESTService} from './rest.service'
import {Pension} from 'models/pension'

@Injectable()
export class PensionService {

  constructor(private rest: RESTService) {
  }

  simulator(pension: Pension) {
    return this.rest.post('/simulator', pension)
  }
}

