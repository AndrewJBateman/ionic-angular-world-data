import { IonItemSliding, LoadingController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

import { PopoverController } from "@ionic/angular";
import { PopoverPage } from "./favourites-popover/favourites-popover";

@Component({
	selector: "app-favourites",
	templateUrl: "./favourites.page.html",
	styleUrls: ["./favourites.page.scss"],
})
export class FavouritesPage implements OnInit {
	countryList = [];
	sliderOptions = {
		allowSlidePrev: false,
		allowSlideNext: false,
	};

	constructor(
		private loadingCtrl: LoadingController,
		public popoverCtrl: PopoverController
	) {}

	async presentPopover(event: any) {
		const popover = await this.popoverCtrl.create({
			component: PopoverPage,
			event,
		});
		await popover.present();
	}

	ngOnInit() {}

	onRemoveFavourite() {}

	onClearAll() {}
}
