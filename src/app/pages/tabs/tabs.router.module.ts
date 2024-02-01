import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
	{
		path: "tabs",
		component: TabsPage,
		children: [
			{
				path: "country-list",
				children: [
					{
						path: "",
						loadComponent: () =>
							import("../country-list/country-list.page").then(
								(m) => m.CountryListPage
							),
					},
				],
			},
			{
				path: "ocean-list",
				children: [
					{
						path: "",
						loadComponent: () =>
							import("../ocean-list/ocean-list.page").then(
								(m) => m.OceanListPage
							),
					},
				],
			},
			{
				path: "favourites",
				children: [
					{
						path: "",
						loadChildren: () =>
							import("../favourites/favourites.module").then(
								(m) => m.FavouritesPageModule
							),
					},
				],
			},
			{
				path: "about",
				children: [
					{
						path: "",
						loadChildren: () =>
							import("../about/about.module").then((m) => m.AboutPageModule),
					},
				],
			},
			{
				path: "map",
				children: [
					{
						path: "",
						loadChildren: () =>
							import("../map/map.module").then((m) => m.MapPageModule),
					},
				],
			},
			{
				path: "",
				redirectTo: "/tabs/country-list",
				pathMatch: "full",
			},
		],
	},
	{
		path: "",
		redirectTo: "/tabs/country-list",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TabsPageRoutingModule {}
