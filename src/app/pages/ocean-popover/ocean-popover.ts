import { Component } from "@angular/core";

import oceanData from "../ocean-list/oceans.json";
import { IonicModule } from "@ionic/angular";

@Component({
    template: `
		@for (ocean of Oceans; track ocean) {
		  <ion-list>
		    <ion-item button href="{{ ocean.wikiLink }}" target="_blank">
		      <ion-label color="secondary">
		        <ion-icon name="information-circle" size="large" color="secondary">
		        </ion-icon>
		        {{ ocean.name }} Ocean
		      </ion-label>
		    </ion-item>
		  </ion-list>
		}
		`,
    styleUrls: ["./ocean-popover.scss"],
    standalone: true,
    imports: [IonicModule],
})
export class PopoverPage {
	Oceans: any = oceanData;
}
