import { NgModule } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

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
        RouterModule.forChild(routes),
        ComponentsModule,
        FavouritesPage, PopoverPage,
    ],
    providers: [Location]
})
export class FavouritesPageModule {}
