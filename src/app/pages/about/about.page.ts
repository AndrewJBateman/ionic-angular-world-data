import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PopoverController } from "@ionic/angular";

import { PopoverPage } from "../about-popover/about-popover";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class AboutPage {
  constructor(private popoverCtrl: PopoverController) {}

  async presentPopover(event: Event): Promise<void> {
    try {
      const popover = await this.popoverCtrl.create({
        component: PopoverPage,
        event,
      });
      await popover.present();
    } catch (err: unknown) {
      console.error("Error presenting popover:", err);
      // Handle the error or display an error message to the user
    }
  }
}
