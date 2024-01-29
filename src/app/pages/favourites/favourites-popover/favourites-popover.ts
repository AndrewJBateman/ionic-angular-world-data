import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController, IonicModule } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";
import { NgIf } from "@angular/common";

@Component({
    templateUrl: "./favourites-popover.html",
    styleUrls: ["./favourites-popover.scss"],
    standalone: true,
    imports: [NgIf, IonicModule],
})
export class PopoverPage {
  @Input() countryChosen: Boolean;

  constructor(
    public popoverCtrl: PopoverController,
    private storage: StorageService,
    private router: Router
  ) {}

  async onDeleteAllFavourites() {
    await this.storage.clearStoredData("favourites");
    this.popoverCtrl.dismiss();
    this.router.navigate(["/app/tabs/country-list"]);
  }

  openUrl(url: string) {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }

  onClosePopover(event: Event): void {
    this.popoverCtrl.dismiss();
  }
}
