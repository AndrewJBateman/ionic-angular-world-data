import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TranslateModule } from "@ngx-translate/core";

import { CountryListPage } from "./country-list.page";
import { ComponentsModule } from "../../components/components.module";

import { PopoverPage } from "../country-popover/country-popover";

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
		TranslateModule,
		ComponentsModule,
	],
	declarations: [CountryListPage, PopoverPage],
	entryComponents: [PopoverPage],
})
export class CountryListPageModule {}
