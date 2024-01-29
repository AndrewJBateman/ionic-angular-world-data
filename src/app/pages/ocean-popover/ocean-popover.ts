import { Component } from "@angular/core";

import oceanData from "../ocean-list/oceans.json";
import { IonicModule } from "@ionic/angular";
import { NgFor } from "@angular/common";
@Component({
    template: `
		<ion-list *ngFor="let ocean of Oceans">
			<ion-item button href="{{ ocean.wikiLink }}" target="_blank">
				<ion-label color="secondary">
					<ion-icon name="information-circle" size="large" color="secondary">
					</ion-icon>
					{{ ocean.name }} Ocean
				</ion-label>
			</ion-item>
		</ion-list>
	`,
    styleUrls: ["./ocean-popover.scss"],
    standalone: true,
    imports: [NgFor, IonicModule],
})
export class PopoverPage {
	Oceans: any = oceanData;
}
