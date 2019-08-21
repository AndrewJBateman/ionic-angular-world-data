import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'country-list',
				children: [
					{
						path: '',
						loadChildren: '../country-list/country-list.module#CountryListPageModule'
					}
				]
			},
			{
				path: 'categories',
				children: [
					{
						path: '',
						loadChildren: '../categories/categories.module#CategoriesPageModule'
					}
				]
			},
			{
				path: 'favourites',
				children: [
					{
						path: '',
						loadChildren: '../favourites/favourites.module#FavouritesPageModule'
					}
				]
			},
			{
				path: 'about',
				children: [
					{
						path: '',
						loadChildren: '../about/about.module#AboutPageModule'
					}
				]
			},
			{
				path: '',
				redirectTo: '/tabs/country-list',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {}
