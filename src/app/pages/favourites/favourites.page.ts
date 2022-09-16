import { Component, OnInit } from "@angular/core";

import { PopoverController } from "@ionic/angular";
import { PopoverPage } from "./favourites-popover/favourites-popover";
import { CountryDetailInterface } from "src/app/interfaces/interface";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.page.html",
  styleUrls: ["./favourites.page.scss"],
})
export class FavouritesPage implements OnInit {
  loadingInfo = false;
  countryChosen = false;
  isFavourite = false;
  countries: CountryDetailInterface[] = [];
  country: CountryDetailInterface;

  constructor(
    public popoverCtrl: PopoverController,
    private storage: StorageService
  ) {}

  async presentPopover(event: any): Promise<void> {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });
    await popover.present();
  }

  async ngOnInit(): Promise<void> {
    this.loadingInfo = true;
    await this.getFavourites();
  }

  async getFavourites(): Promise<void> {
    this.countries = await this.storage.loadFavourites();
    this.loadingInfo = false;
    this.isFavourite = true;
  }

  onShowCountryDetail(): void {
    this.countryChosen = true;
  }

  // If user clicks on header back button then show favourites list
  backToList() {
    // this.countryName = "";
    this.countryChosen = false;
  }
}
