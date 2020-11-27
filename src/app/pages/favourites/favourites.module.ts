import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

// ngx node modules
import { TranslateModule } from "@ngx-translate/core";

// Component & pipe modules
import { PopoverPage } from "./favourites-popover/favourites-popover";
import { FavouritesPage } from "./favourites.page";
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
	{
		path: "",
		component: FavouritesPage,
	},
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TranslateModule,
		RouterModule.forChild(routes),
		ComponentsModule,
	],
	declarations: [FavouritesPage, PopoverPage],
	entryComponents: [PopoverPage],
})
export class FavouritesPageModule {}
