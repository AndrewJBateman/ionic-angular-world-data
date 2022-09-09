import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";

@Component({
  template: `
    <ion-list>
      <ion-item
        button
        (click)="onDeleteAllFavourites()"
      >
        <ion-label>
          <ion-icon name="trash" size="large" color="danger"></ion-icon>
          Delete all favourites
        </ion-label>
      </ion-item>
    </ion-list>
  `,
  styleUrls: ["./favourites-popover.scss"],
})
export class PopoverPage {

  constructor(
    public popoverCtrl: PopoverController,
    private storage: StorageService,
    private router: Router
  ) {}

  onDeleteAllFavourites() {
    this.storage.clearStoredData("favourites");
    this.popoverCtrl.dismiss();
    this.router.navigate(["/app/tabs/country-list"]);
  }

  openUrl(url: string) {
    console.log("openUrl function clicked");
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }
}
