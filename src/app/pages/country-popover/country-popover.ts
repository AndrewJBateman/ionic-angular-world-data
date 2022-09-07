import { Component, OnInit } from "@angular/core";
import { NavParams, NavController, ToastController } from "@ionic/angular";
import { PopoverController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";

@Component({
  template: `
    <ion-item button (click)="onClickForInfo()">
      <ion-label>
        <ion-icon
          name="information-circle"
          size="large"
          color="primary"
        ></ion-icon>
        More info.
      </ion-label>
    </ion-item>
    <ion-item button (click)="onUpdateFavourites()">
      <ion-label>
        <ion-icon [name]="favourite" size="large" color="danger"></ion-icon>
        Favourite
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
    this.countryName = this.country.name;

    this.storage.countryInFavourites(this.countryName).then(
      (inFavourites: Boolean) =>
        (this.favourite = inFavourites ? "heart" : "heart-outline")

      // this.favouritesText = inFavourites
      //   ? "Remove from Favourites"
      //   : "Add to Favourites";
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
    const exists = await this.storage.storeCountry(this.country);
    console.log("exists: ", exists);
    message = exists
      ? "Country added to favourites"
      : "Country removed from favourites";
    this.favourite = exists ? "heart" : "heart-outline";
    this.presentToast(message);
  }

  openUrl(url: string): void {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }

  closePopover(): void {
    this.popoverCtrl.dismiss();
  }
}
