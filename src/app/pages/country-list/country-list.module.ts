import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CountryListPage } from "./country-list.page";
import { ComponentsModule } from "../../components/components.module";

import { CountryPopoverPage } from "../country-popover/country-popover";
import { StorageService } from "src/app/services/storage.service";

const routes: Routes = [
	{
		path: "",
		component: CountryListPage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes),
		ComponentsModule
	],
	declarations: [CountryListPage, CountryPopoverPage],
	providers: [StorageService]
})
export class CountryListPageModule {}
