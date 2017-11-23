import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeopleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-details',
  templateUrl: 'people-details.html',
})
export class PeopleDetailsPage {
  people: any;
  people_str:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.people = this.navParams.get('people');
    this.people_str = String(JSON.stringify(this.navParams.get('people')));
  }
}
