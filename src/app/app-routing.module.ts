import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/app/tabs/country-list",
		pathMatch: "full",
	},
	{
		path: "app",
		loadChildren: () =>
			import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
