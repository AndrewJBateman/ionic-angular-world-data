import { Component, Input, inject } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController, IonicModule } from "@ionic/angular";
import { StorageService } from "src/app/services/storage.service";


@Component({
    templateUrl: "./favourites-popover.html",
    styleUrls: ["./favourites-popover.scss"],
    standalone: true,
    imports: [IonicModule],
})
export class PopoverPage {
  public popoverCtrl = inject(PopoverController);
  private storage = inject(StorageService);
  private router = inject(Router);

  @Input() countryChosen: Boolean;

  async onDeleteAllFavourites() {
    console.log('delete all favourites');
    await this.storage.clearStoredData("favourites");
    this.popoverCtrl.dismiss();
    this.router.navigate(["/app/tabs/favourites"]);
    window.location.reload();
  }

  openUrl(url: string) {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }

  onClosePopover(event: Event): void {
    this.popoverCtrl.dismiss();
  }
}
