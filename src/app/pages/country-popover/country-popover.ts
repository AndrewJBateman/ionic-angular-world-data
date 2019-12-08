import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-item>
      <ion-avatar>
        <ion-icon name="home"></ion-icon>
      </ion-avatar>
      <h2>Capital</h2>
      <p>{{ country.capital }}</p>
    </ion-item>
    <ion-list>
      <ion-item button (click)="openContact()">
        <ion-label>Country</ion-label>
      </ion-item>
      <ion-item button (click)="openUrl('https://andrewbateman.org')">
        <ion-label>Author Website</ion-label>
      </ion-item>
      <ion-item button (click)="openUrl('https://github.com/AndrewJBateman/ionic-angular-news-app')">
        <ion-label>App Github Repo</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage implements OnInit{

  country = null;

  constructor(
    private navParams: NavParams,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.country = this.navParams.get('country');
    console.log('this.country', this.country);
  }

	openContact() {
		console.log('openContact function clicked')
		this.popoverCtrl.dismiss();
	}

  openUrl(url: string) {
		console.log('openUrl function clicked')
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
  
  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
