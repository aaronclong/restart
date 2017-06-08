import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-partnersignup',
  templateUrl: 'partnersignup.html'
})
export class PartnerSignUp {

  constructor(public navCtrl: NavController) {

  }
  goBack() {
    this.navCtrl.pop();
  }

}