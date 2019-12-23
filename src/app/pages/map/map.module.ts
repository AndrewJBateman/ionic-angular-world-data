import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule} from '../../components/components.module';
import { MapPage } from './map.page';

const routes: Routes = [
	{
		path: '',
		component: MapPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		ComponentsModule,
	],
	declarations: [MapPage]
})
export class MapPageModule {}
