import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-partnerprofile',
  templateUrl: 'partnerprofile.html'
})
export class PartnerProfile {

  constructor(public navCtrl: NavController) {

  }
  goBack() {
    this.navCtrl.pop();
  }

}