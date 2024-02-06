import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  NavParams,
  NavController,
  IonicModule,
} from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";
import { ToastService } from "../../services/toast.service";

@Component({
  templateUrl: "./country-popover.html",
  styleUrls: ["./country-popover.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class CountryPopoverPage implements OnInit {
  public navCtrl = inject(NavController);
  private navParams = inject(NavParams);
  private popoverCtrl = inject(PopoverController);
  private router = inject(Router);
  private storage = inject(StorageService);
  private toastService = inject(ToastService);

  viewMap = false;
  country = null;
  countryCode: string;
  countryName: string;
  favourite = "heart-outline";
  favouritesText = "Favourite";

  ngOnInit(): void {
    this.country = this.navParams.get("country");
    this.countryName = this.country.name?.common;

    this.storage
      .countryInFavourites(this.countryName)
      .then(
        (inFavourites: boolean) => (
          (this.favourite = inFavourites ? "heart" : "heart-outline"),
          (this.favouritesText = inFavourites
            ? "Remove from favourites"
            : "Add to favourites")
        )
      );
  }

  dismissPopover(): void {
    this.popoverCtrl.dismiss();
  }

  onClickForInfo(): void {
    const countryToSearch = this.country.name?.common;
    const url = `https://en.wikipedia.org/wiki/${countryToSearch}`;
    window.open(url, "_blank");
    this.dismissPopover();
  }

  async onUpdateFavourites(): Promise<void> {
    let message = "";
    const exists = await this.storage.toggleCountryStore(this.country);
    message = exists
      ? "Country added to favourites"
      : "Country removed from favourites";
    this.favourite = exists ? "heart" : "heart-outline";
    this.favouritesText = exists
      ? "Remove from favourites"
      : "Add to favourites";
    this.toastService.presentSuccessToast(message);
    this.dismissPopover();
  }

  onClickForMap(event: any) {
    this.router.navigate(["app/tabs/map"], {
      queryParams: {
        countryName: this.countryName,
        capName: this.country?.capital?.[0],
        lat: this.country?.latlng?.[0],
        lon: this.country?.latlng?.[1],
        capLat: this.country?.capitalInfo?.latlng?.[0],
        capLon: this.country?.capitalInfo?.latlng?.[1],
      },
    });
    this.dismissPopover();
  }

  openUrl(url: string): void {
    window.open(url, "_blank");
    this.dismissPopover();
  }

  onClosePopover(event: Event): void {
    this.dismissPopover();
  }
}
