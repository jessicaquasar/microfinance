import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {TextMaskModule} from 'angular2-text-mask'
import {RouterModule, Routes} from '@angular/router'
import {AppComponent} from './app.component'
import {LoginComponent} from './login/login.component'
import {PensionComponent} from './pension/pension.component'
import {RESTService} from 'services/rest.service'
import {PensionService} from 'services/pension.service'
import {LoginService} from 'services/login.service'
import {
  MdDatepickerModule,
  MdNativeDateModule,
  MdButtonModule,
  MdInputModule,
  MdCardModule,
  MdMenuModule,
  MdIconModule,
  MdSidenavModule,
  MdSelectModule,
  MdListModule
} from '@angular/material'
import {CurrencyMaskModule} from 'ng2-currency-mask'


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'pension',
    component: PensionComponent,
    data: {
      title: 'Simulador de Previdência Privada'
    }
  },
  {
    path: '**',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PensionComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdSelectModule,
    TextMaskModule,
    CurrencyMaskModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RESTService,
    LoginService,
    PensionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
