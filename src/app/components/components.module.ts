import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TranslateModule } from "@ngx-translate/core";

import { CountryItemComponent } from "./country-item/country-item.component";
import { DetailItemComponent } from "./detail-item/detail-item.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

const COMPONENTS: any[] = [
	CountryItemComponent,
	DetailItemComponent,
	ProgressBarComponent,
];

@NgModule({
	declarations: [...COMPONENTS],
	imports: [CommonModule, IonicModule, TranslateModule],
	exports: [...COMPONENTS],
})
export class ComponentsModule {}
