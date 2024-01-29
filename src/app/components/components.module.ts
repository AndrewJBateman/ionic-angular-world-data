import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { CountryItemComponent } from "./country-item/country-item.component";
import { DetailItemComponent } from "./detail-item/detail-item.component";
import { ProgressBarComponent } from "./progress-bar.component";

const COMPONENTS: any[] = [CountryItemComponent, DetailItemComponent];

@NgModule({
    imports: [CommonModule, IonicModule, ProgressBarComponent, ...COMPONENTS],
    exports: [...COMPONENTS],
})
export class ComponentsModule {}
