import { Component, OnInit } from "@angular/core";
import { NavParams, NavController, ToastController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";

@Component({
  templateUrl: "./country-popover.html",
  styleUrls: ["./country-popover.scss"],
})
export class PopoverPage implements OnInit {
  viewMap = false;
  country = null;
  countryCode: string;
  countryName: string;
  favourite = "heart-outline";
  favouritesText = "Favourite";

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private popoverCtrl: PopoverController,
    private storage: StorageService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit(): void {
    this.country = this.navParams.get("country");
    this.countryName = this.country.name["common"];

    this.storage
      .countryInFavourites(this.countryName)
      .then(
        (inFavourites: Boolean) => (
          (this.favourite = inFavourites ? "heart" : "heart-outline"),
          (this.favouritesText = inFavourites
            ? "Remove from favourites"
            : "Add to favourites")
        )
      );
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: "middle",
      duration: 2000,
    });
    toast.present();
  }

  onClickForInfo(): void {
    const countryToSearch = this.country.name.common;
    const url = `https://en.wikipedia.org/wiki/${countryToSearch}`;
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }

  async onUpdateFavourites(): Promise<void> {
    let message = "";
    const exists = await this.storage.toggleCountryStore(this.country);
    message = exists
      ? "Country added to favourites"
      : "Country removed from favourites";
    this.favourite = exists ? "heart" : "heart-outline";
    this.favouritesText = exists ? "Remove from favourites" : "Add to favourites";
    this.presentToast(message);
  }

  openUrl(url: string): void {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }

  onClosePopover(event: Event): void {
    this.popoverCtrl.dismiss();
  }
}
