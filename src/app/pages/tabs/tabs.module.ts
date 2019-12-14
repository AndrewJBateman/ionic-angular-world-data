import { FavouritesPageModule } from './../favourites/favourites.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { CountryListPageModule } from '../country-list/country-list.module';
import { SearchPageModule } from '../search/search.module';

@NgModule({
	imports: [
		AboutPageModule,
		ContactPageModule,
		CountryListPageModule,
		SearchPageModule,
		FavouritesPageModule,
		CommonModule,
		FormsModule,
		IonicModule,
		TabsPageRoutingModule
	],
	declarations: [TabsPage]
})
export class TabsPageModule {}
