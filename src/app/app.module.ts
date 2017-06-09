import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderForm } from '../pages/orderform/orderform';
import { OrderSummary } from '../pages/ordersummary/ordersummary';
import { PartnerProfile } from '../pages/partnerprofile/partnerprofile';
import { PartnerSignUp } from '../pages/partnersignup/partnersignup';
import { VolunteerProfile } from '../pages/volunteerprofile/volunteerprofile';
import { VolunteerSignUp } from '../pages/volunteersignup/volunteersignup';
import {HttpProvider} from '../providers/http-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderForm,
    OrderSummary,
    PartnerProfile,
    PartnerSignUp,
    VolunteerProfile,
    VolunteerSignUp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderForm,
    OrderSummary,
    PartnerProfile,
    PartnerSignUp,
    VolunteerProfile,
    VolunteerSignUp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
