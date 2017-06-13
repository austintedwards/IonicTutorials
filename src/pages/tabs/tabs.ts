import { Component } from '@angular/core';
import { Favorites} from '../favorites/favorites';
import { Library} from '../library/library';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
  <ion-tab [root] = "favorites" tabTitle = "Favorites" tabIcon = "star"></ion-tab>
  <ion-tab [root] = "library" tabTitle = "Library" tabIcon = "bookmarks"></ion-tab>
  </ion-tabs>
    `
})
export class Tabs {
  favorites = Favorites;
  library = Library;
}
