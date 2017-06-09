import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VolunteerSignUp } from '../volunteersignup/volunteersignup';
import { PartnerSignUp } from '../partnersignup/partnersignup';
import { HttpProvider } from '../../providers/http-provider';

@Component({
  selector: 'page-home',
  providers:[HttpProvider],
  templateUrl: 'home.html'
})
export class HomePage {

  private Username: string;
  private Password: string;

  constructor(public navCtrl: NavController, public httpProvider: HttpProvider) {
  }
  goToVolunteerSignUp(){
    this.navCtrl.push(VolunteerSignUp);
  }
  goToPartnerSignUp(){
    this.navCtrl.push(PartnerSignUp);
  }
  attemptLogin() {
    this.httpProvider.getUserData();
    let users: Object = this.httpProvider.getUsers();
    console.log(users);
  }

}
