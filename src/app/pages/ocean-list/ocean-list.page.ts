import { Component } from "@angular/core";

import { PopoverController } from "@ionic/angular";
import { PopoverPage } from "../ocean-popover/ocean-popover";

import oceanData from "./oceans.json";

@Component({
  selector: "app-ocean-list",
  templateUrl: "./ocean-list.page.html",
  styleUrls: ["./ocean-list.page.scss"],
})
export class OceanListPage {
  Oceans: any = oceanData;

  constructor(public popoverCtrl: PopoverController) {}

  async presentPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });
    await popover.present();
  }
}
