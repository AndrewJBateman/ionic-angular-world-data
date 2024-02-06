import { Component, inject } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PopoverController } from "@ionic/angular";

import { ToastService } from "src/app/services/toast.service";
import { PopoverPage } from "../about-popover/about-popover";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class AboutPage {
  private popoverCtrl = inject(PopoverController)
  private toastService = inject(ToastService);

  async presentPopover(event: Event): Promise<void> {
    try {
      const popover = await this.popoverCtrl.create({
        component: PopoverPage,
        event,
      });
      await popover.present();
    } catch (error: any) {
      this.toastService.presentErrorToast(
        `An error occurred: "${error.message}". Please try again later.`
      );
      throw error(error);
    }
  }
}
