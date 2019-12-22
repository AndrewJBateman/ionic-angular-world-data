import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	template: `

    <ion-list>

      <ion-item button (click)="moreInfo()">
        <ion-label>
        <ion-icon name="information-circle" size="large" color="primary"></ion-icon>
        More info.
        </ion-label>
      </ion-item>

      <ion-item button (click)="openMap()">
        <ion-label>
        <ion-icon name="locate" size="large" color="secondary"></ion-icon>
        View map
        </ion-label>
      </ion-item>

      <ion-item button (click)="addToFavourites()">
        <ion-label>
        <ion-icon name="heart" size="large" color="danger"></ion-icon>
        Add to favourites
        </ion-label>
      </ion-item>

    </ion-list>
  `,
	styleUrls: ['./country-popover.scss']
})
export class PopoverPage implements OnInit {
	country = null;
	countryCode: string;


	constructor(
		private router: Router,
		private navParams: NavParams,
		private popoverCtrl: PopoverController
	) { }

	ngOnInit() {
		this.country = this.navParams.get('country');
		console.log('this.country', this.country);
	}

	moreInfo() {
		const countryToSearch = this.country.name;
		const url = `https://en.wikipedia.org/wiki/${countryToSearch}`;
		window.open(url, '_blank');
		this.popoverCtrl.dismiss();
	}

	openUrl(url: string) {
		console.log('openUrl function clicked');
		window.open(url, '_blank');
		this.popoverCtrl.dismiss();
	}

	openMap() {
		console.log('openMap function clicked');
		console.log('country to pass to chart: ', this.country);
		this.router.navigate(['app/tabs/map']);
		this.popoverCtrl.dismiss();
	}

	addToFavourites() {

	}

	closePopover() {
		this.popoverCtrl.dismiss();
	}

}
