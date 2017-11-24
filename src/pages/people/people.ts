import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loading: LoadingController) {
    let loader = this.loading.create();
    loader.present();
    this.peoples = this.apiProvider.getPeople().finally(() => {loader.dismiss();});
  }
  openDetails(people) {
    this.navCtrl.push('PeopleDetailsPage', {people: people});
  }

}
