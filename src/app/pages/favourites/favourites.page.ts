/**
 * FavouritesPage class represents a page component for displaying a list of favourite countries.
 * It is responsible for loading and displaying the favourite countries, as well as handling user interactions.
 *
 * @constructor
 * @param {PopoverController} popoverCtrl - The popover controller for displaying a popover page.
 * @param {StorageService} storage - The storage service for loading the favourite countries.
 */
import { Component, OnInit, inject } from "@angular/core";
import { Location } from "@angular/common";

import { PopoverController, IonicModule } from "@ionic/angular";
import { PopoverPage } from "./favourites-popover/favourites-popover";
import { CountryDetail } from "src/app/interfaces/country";
import { StorageService } from "src/app/services/storage.service";
import { DetailItemComponent } from "../../components/detail-item/detail-item.component";
import { CountryItemComponent } from "../../components/country-item/country-item.component";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.page.html",
  styleUrls: ["./favourites.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CountryItemComponent,
    DetailItemComponent,
    PopoverPage,
  ],
  providers: [Location],
})
export class FavouritesPage implements OnInit {
  public popoverCtrl = inject(PopoverController);
  private storage = inject(StorageService);
  
  loadingInfo = false;
  countryChosen = false;
  isFavourite = false;
  countries: CountryDetail[] = [];
  country: CountryDetail;

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
    try {
      this.countries = await this.storage.loadFavourites();
    } finally {
      this.loadingInfo = false;
    }
    this.isFavourite = true;
  }

  onShowCountryDetail(): void {
    this.countryChosen = true;
  }

  // If user clicks on header back button then show favourites list
  backToList() {
    // this.countryName = "";
    this.countryChosen = false;
    this.isFavourite = true;
  }
}
