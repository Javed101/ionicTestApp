import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider, public loading: LoadingController) {
    let loader = this.loading.create();
    loader.present();
    this.films = this.apiProvider.getFilms().finally(() => {loader.dismiss();})
  }
  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

}
