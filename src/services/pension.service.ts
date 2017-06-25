import {Injectable} from '@angular/core'
import {RESTService} from './rest.service'
import {PensionCreate} from 'models/pension'

@Injectable()
export class PensionService {

  constructor(private rest: RESTService) {
  }

  simulator(pension: PensionCreate) {
    return this.rest.post('/simulator', pension)
  }
}

