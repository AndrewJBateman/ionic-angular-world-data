// angular & ionic/angular node modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular';

// ngx node modules
import { TranslateModule } from '@ngx-translate/core';

// Component modules
import { CountryItemComponent } from './country-item/country-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
	declarations: [CountryItemComponent, DetailItemComponent, ProgressBarComponent],
	imports: [
		CommonModule,
		IonicModule,
		TranslateModule
	],
	exports: [
		CountryItemComponent,
		ProgressBarComponent,
		DetailItemComponent
	]
})

export class ComponentsModule {}