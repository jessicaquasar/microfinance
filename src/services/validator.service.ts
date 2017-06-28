import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs'

export class FormValidators {

  static Date(formControl: FormControl): Observable<{[k: string]: boolean}> {

    const maxDate = new Date()
    const minDate = new Date((maxDate.getFullYear() - 60).toString())

    return new Observable<{[k: string]: boolean}>(observe => {

      let isValid = true
      let value = formControl.value

      let onlyNumbers = value.replace(/\D/g, '')
      if (onlyNumbers.length >= 8) {

        let dateFormatted = onlyNumbers.substring(2, 4) + '/' + onlyNumbers.substring(0, 2) + '/' + onlyNumbers.substring(4, value.length)
        let chooseDate = new Date(dateFormatted)

        if (chooseDate.toString().indexOf("Invalid") >= 0 || chooseDate < minDate || chooseDate > maxDate)
          isValid = false
      }

      if (onlyNumbers.length === 8 && isValid) {

        observe.next()
      } else {

        observe.next({
          valid: false
        })
      }

      observe.complete()
    })
  }
}