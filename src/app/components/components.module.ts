// angular & ionic/angular node modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// ngx node modules
import { TranslateModule } from '@ngx-translate/core';

// Component modules
import { CountryItemComponent } from './country-item/country-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChartComponent } from './chart/chart.component';

import { GoogleChartsModule } from 'angular-google-charts';

const COMPONENTS: any[] = [
	CountryItemComponent,
	DetailItemComponent,
	ProgressBarComponent,
	ChartComponent
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [
		CommonModule,
		IonicModule,
		TranslateModule,
		GoogleChartsModule
	],
	exports: [...COMPONENTS]
})

export class ComponentsModule {}
