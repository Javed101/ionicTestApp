import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {
  planets:Observable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loading: LoadingController) {
    let loader = this.loading.create();
    loader.present();
    this.planets = apiProvider.getPlanet().finally(() => {loader.dismiss();});
  }
  openDetails(planet) {
    this.navCtrl.push('PlanetDetailsPage', {planet: planet});
  }

}
