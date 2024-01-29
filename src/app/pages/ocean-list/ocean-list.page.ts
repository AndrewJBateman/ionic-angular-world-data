import { Component } from "@angular/core";

import { PopoverController, IonicModule } from "@ionic/angular";
import { PopoverPage } from "../ocean-popover/ocean-popover";

import oceanData from "./oceans.json";
import { NgFor } from "@angular/common";

@Component({
    selector: "app-ocean-list",
    templateUrl: "./ocean-list.page.html",
    styleUrls: ["./ocean-list.page.scss"],
    standalone: true,
    imports: [IonicModule, NgFor],
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
