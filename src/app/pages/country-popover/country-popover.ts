import { Component, OnInit } from "@angular/core";
import { NavParams, NavController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
// import { MapPage } from '../map/map';

@Component({
	template: `
			<ion-item button (click)="moreInfo()">
				<ion-label>
					<ion-icon
						name="information-circle"
						size="large"
						color="primary"
					></ion-icon>
					More info.
				</ion-label>
			</ion-item>
	`,
	styleUrls: ["./country-popover.scss"],
})
export class PopoverPage implements OnInit {
	viewMap = false;
	country = null;
	countryCode: string;
	countryName: string;

	constructor(
		public navCtrl: NavController,
		private navParams: NavParams,
		private popoverCtrl: PopoverController
	) {}

	ngOnInit() {
		this.country = this.navParams.get("country");
		this.countryName = this.country.name;
		console.log("this.country", this.country);
	}

	moreInfo() {
		const countryToSearch = this.country.name;
		const url = `https://en.wikipedia.org/wiki/${countryToSearch}`;
		window.open(url, "_blank");
		this.popoverCtrl.dismiss();
	}

	openUrl(url: string) {
		console.log("openUrl function clicked");
		window.open(url, "_blank");
		this.popoverCtrl.dismiss();
	}

	closePopover() {
		this.popoverCtrl.dismiss();
	}
}
