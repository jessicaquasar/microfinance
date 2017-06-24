import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {PensionService} from 'services/pension.service'
import {Pension} from 'models/pension'
import {Response} from '@angular/http'

@Component({
  selector: 'app-pension.ts',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.css'],
  providers: [
    PensionService
  ]
})

export class PensionComponent {

  pensionModel: Pension = {}
  pensionResult: string

  mask = {
    mask: [/[1-3]{1}/, /[0-9]{1}/, '/', /[0-1]{1}/, /[0-9]{1}/, '/', /[1-2]{1}/, /0|9/, /[0-9]{1}/, /[0-9]{1}/],
    showMask: true
  }

  currency = {
    prefix: 'R$ ',
    thousands: '.',
    decimal: ',',
    align: 'left'
  }

  genders = [
    {value: 'male', viewValue: 'Masculino'},
    {value: 'female', viewValue: 'Feminino'}
  ]

  years = [
    {value: 10, viewValue: 'Dez anos'},
    {value: 20, viewValue: 'Vinte anos'},
    {value: 30, viewValue: 'Trinta anos'},
    {value: 40, viewValue: 'Quarenta anos'}
  ]

  constructor(private router: Router,
              private pensionService: PensionService) {
  }

  autoFillGender() {

    let age = 60

    if (this.pensionModel.gender === 'male')
      age = 65

    this.pensionModel.retired = age
  }

  goLogin() {

    this.router.navigate(['/login'])
  }

  submit() {

    this.pensionService.simulator(this.pensionModel)
      .subscribe(
        (response: Response) => this.pensionResult = response.text(),
        (error: Response) => console.log(error)
      )
  }
}
