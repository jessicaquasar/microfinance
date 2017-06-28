import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {PensionService} from 'services/pension.service'
import {Pension, PensionCreate} from 'models/pension'
import {Response} from '@angular/http'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {FormValidators} from 'services/validator.service'

@Component({
  selector: 'app-pension.ts',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.css'],
  providers: [
    PensionService
  ]
})

export class PensionComponent {

  pensionForm: FormGroup

  pensionCreate: PensionCreate = {}
  pensionResult: Pension
  pensionList: Pension[]

  mask = {
    mask: [/[0-9]{1}/, /[0-9]{1}/, '/', /[0-9]{1}/, /[0-9]{1}/, '/', /[1-2]{1}/, /0|9/, /[0-9]{1}/, /[0-9]{1}/],
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
              private fb: FormBuilder,
              private pensionService: PensionService) {

    this.pensionForm = fb.group({
      'birthdate': ['', Validators.required, FormValidators.Date],
      'gender': ['', Validators.required],
      'retired': ['', Validators.required],
      'year': ['', Validators.required],
      'money': ['', Validators.required]
    })
  }

  autoFillGender() {

    let age = 60

    if (this.pensionCreate.gender === 'male')
      age = 65

    this.pensionCreate.retired = age
  }

  goLogin() {

    this.router.navigate(['/login'])
  }

  submit() {

    let pensionClone: PensionCreate = JSON.parse(JSON.stringify(this.pensionCreate))
    pensionClone.birthdate = this.formatDate(pensionClone.birthdate)

    this.pensionService.simulator(pensionClone)
      .subscribe(
        (response: Response) => this.pensionResult = response.json(),
        (error: Response) => console.log(error)
      )

    this.pensionService.list()
      .subscribe(
        (response: Response) => this.pensionList = response.json(),
        (error: Response) => console.log(error)
      )
  }

  private formatDate(date: string): string {

    let localDate = date.replace(/\D/g, '')
    return localDate.substring(2, 4) + '/' + localDate.substring(0, 2) + '/' + localDate.substring(4, date.length)
  }
}
