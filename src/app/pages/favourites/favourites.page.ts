import { IonItemSliding, LoadingController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

import { PopoverController } from "@ionic/angular";
import { PopoverPage } from "./favourites-popover/favourites-popover";
import { Country } from "src/app/interfaces/interface";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.page.html",
  styleUrls: ["./favourites.page.scss"],
})
export class FavouritesPage implements OnInit {
  loadingInfo = false;
  countries: Country[] = [];
  sliderOptions = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    private storage: StorageService
  ) {}

  async presentPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });
    await popover.present();
  }

  ngOnInit() {
    this.loadingInfo = true;
    this.getFavourites();
    this.loadingInfo = false;
  }

  async getFavourites(): Promise<void> {
    this.countries = await this.storage.loadFavourites();
		console.log('length:', this.countries.length)
  }

  onRemoveFavourite() {}
}
